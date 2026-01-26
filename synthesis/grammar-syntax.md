# Agent Pattern Syntax Rules

> **You Are Here:** This document defines **how to combine primitives** from the vocabulary into valid compositions. Think of `grammar-vocabulary.md` as the dictionary (what words mean) and this document as the grammar rules (how to form sentences). Use this when designing multi-agent systems, autonomous loops, or any pattern that combines multiple primitives. If a composition fails at runtime, check here first—you may have a syntax error.

---
## D-FINAL Integration
**Cross-references:** [D-FINAL-architecture.md Section 6 for combinations, D-FINAL-implementation.md Section 4 for tools]
**Journey link:** journey-architecture.md, journey-implementation.md
**Last updated:** 2026-01-18 (Phase 2B)
---

A formal grammar for composing agentic patterns. These rules define how primitives combine, what compositions are valid, and how to recognize syntax errors before they manifest as runtime failures.

---

## Composition Operators

### Sequential (→)
**Meaning:** A completes fully, then B starts with A's output
**Symbol:** `→` or `&&`
**Temporal:** Strictly ordered, blocking

```
Task → Test → Commit
```

**Semantics:**
- A must exit successfully before B begins
- Output of A becomes input context for B
- Failure in A halts the chain (unless wrapped in error handling)

**Implementation:**
```bash
# Shell semantics
task_execute && test_run && git_commit

# Explicit chaining
result_a = execute(A)
if result_a.success:
    result_b = execute(B, context=result_a)
```

---

### Parallel (||)
**Meaning:** A and B execute simultaneously, independently
**Symbol:** `||` or `&`
**Temporal:** Concurrent, non-blocking

```
Worker1 || Worker2 || Worker3
```

**Semantics:**
- No execution order guarantee
- No shared mutable state (each gets own worktree/context)
- Coordination happens at sync points, not during execution

**Implementation:**
```bash
# Background processes
worker1 &
worker2 &
worker3 &
wait  # Sync point

# Git worktrees for isolation
git worktree add ../worker1-space
git worktree add ../worker2-space
```

**Constraints:**
- Parallel units must be independent (no data dependencies)
- Merge conflicts resolved at sync, not during execution

---

### Nested (⊃)
**Meaning:** A contains B; B operates within A's context/lifecycle
**Symbol:** `⊃` or `{ }`
**Temporal:** B's lifetime bounded by A

```
Ralph ⊃ (Task → Test → Commit)
```

**Semantics:**
- Outer pattern provides context, state, and lifecycle management
- Inner pattern inherits outer's constraints
- Inner completion doesn't terminate outer (outer may loop)

**Implementation:**
```python
# Ralph contains task execution loop
class Ralph:
    def run(self):
        while not self.done:
            # Nested sequence
            task = self.get_next()
            result = self.execute(task)
            if self.quality_gate(result):
                self.commit(result)
```

---

### Conditional (?)
**Meaning:** Branch execution based on predicate
**Symbol:** `?` or `if/else`
**Temporal:** Evaluation, then single branch executes

```
passes? → next : retry
test_result ? commit : (fix → retest)
```

**Semantics:**
- Predicate evaluated once at decision point
- Exactly one branch executes
- Can be chained for multi-way branching

**Implementation:**
```python
if quality_gate(result):
    proceed_to_next()
else:
    retry_with_fix()
```

---

### Loop (∿)
**Meaning:** Repeat pattern until termination condition
**Symbol:** `while`, `for`, `∿`
**Temporal:** Iterative, potentially infinite

```
∿(task → test → commit) until complete
while has_tasks: (fetch → execute → verify)
```

**Semantics:**
- Loop body is a complete pattern (often sequential)
- Termination condition checked at defined point (start or end)
- State persists across iterations

---

### Fork-Join (⋔ → ⋀)
**Meaning:** Split into parallel paths, then synchronize
**Symbol:** `⋔` (fork) `⋀` (join)
**Temporal:** Diverge, concurrent execution, converge

```
⋔(worker1 || worker2 || worker3) → ⋀(merge_results)
```

**Semantics:**
- Fork creates independent execution contexts
- Join blocks until all paths complete
- Results aggregated at join point

---

### Checkpoint: Composition Operators
**You should now understand:**
- [ ] Sequential (`→`): A completes, then B starts with A's output
- [ ] Parallel (`||`): A and B run concurrently with isolated state
- [ ] Nested (`⊃`): B operates within A's lifecycle
- [ ] Conditional (`?`): Branch based on predicate
- [ ] Loop (`∿`): Repeat until termination condition
- [ ] Fork-Join (`⋔⋀`): Split, execute in parallel, merge results

**If unclear:** Re-read each operator's "Semantics" section, especially the constraints.

---

## Valid Compositions

### 1. Loop + State + Quality
**Pattern:** Autonomous execution with quality gates

```
while has_tasks:
    task = get_next(state)
    result = execute(task)
    if quality_gate(result):
        commit(result)
        update_state(task, DONE)
    else:
        update_state(task, FAILED)
        log_failure(result)
    if all_complete(state):
        break
```

**Why Valid:**
- Loop provides iteration
- State tracks progress across iterations
- Quality gate prevents bad commits
- Clear termination condition

---

### 2. Orchestrator + Workers + Coordination
**Pattern:** Delegated parallel execution

```
orchestrator:
    tasks = decompose(objective)
    for task in tasks:
        create_subagent(task)

workers || workers || workers:
    receive(task)
    execute_in_worktree()
    report_completion()

orchestrator:
    await all_complete
    merge_results()
```

**Why Valid:**
- Orchestrator coordinates, doesn't execute
- Workers execute, don't coordinate
- Clear handoff points between roles
- Isolation via worktrees

---

### 3. Nested Loops with Escalation
**Pattern:** Retry with escalation

```
for task in tasks:                    # Outer: task iteration
    attempts = 0
    while attempts < MAX_RETRY:       # Inner: retry loop
        result = execute(task)
        if success(result):
            commit(result)
            break
        attempts += 1
        if attempts == MAX_RETRY:
            escalate_to_human(task)
```

**Why Valid:**
- Inner loop bounded (prevents infinite retry)
- Escalation path when automation fails
- Outer loop continues despite inner failures

---

### 4. Conditional Branching with Recovery
**Pattern:** Graceful degradation

```
result = execute(task)
if passes_quality_gate(result):
    commit(result)
    proceed_to_next()
elif is_recoverable(result.error):
    fix = generate_fix(result.error)
    retry_with(task, fix)
else:
    quarantine(task)
    notify_human()
    skip_to_next()
```

**Why Valid:**
- Multiple outcomes handled
- Recovery attempted before escalation
- Failure doesn't halt entire system

---

### 5. Fork-Join Parallel Execution
**Pattern:** CC Mirror style

```
⋔ create_worktrees(n=3)
    || execute_task_a(worktree_1)
    || execute_task_b(worktree_2)
    || execute_task_c(worktree_3)
⋀ merge_all_worktrees()
```

**Why Valid:**
- Isolation prevents conflicts during execution
- Join point handles merge resolution
- Parallelism has clear boundaries

---

### Checkpoint: Valid Compositions
**You should now understand:**
- [ ] Loop + State + Quality: How autonomous execution with quality gates works
- [ ] Orchestrator + Workers: Clear role separation with handoff points
- [ ] Nested Loops with Escalation: Bounded retries with human fallback
- [ ] Fork-Join (CC Mirror): Worktree isolation for parallel execution

**If unclear:** Trace through Template 1 (Ralph Core) step-by-step, identifying each phase.

---

## Invalid Compositions (Syntax Errors)

### Error 1: Worker ⊃ TaskCreate
```
# INVALID
worker:
    tasks = decompose(objective)  # Workers don't coordinate!
    for t in tasks:
        spawn_subworker(t)
```

**Why Invalid:** Workers execute single tasks; they don't decompose or coordinate. Coordination is the orchestrator's role.

**Fix:**
```
orchestrator:
    tasks = decompose(objective)
    for t in tasks:
        assign_to_worker(t)

worker:
    receive(task)
    execute(task)
    report()
```

---

### Error 2: Orchestrator + Direct Tool Use
```
# INVALID
orchestrator:
    plan = create_plan()
    code = write_code()       # Orchestrators don't execute!
    tests = run_tests()
```

**Why Invalid:** Orchestrators coordinate and delegate; they don't use tools directly. This conflates orchestration with execution.

**Fix:**
```
orchestrator:
    plan = create_plan()
    assign_to_worker(write_code, plan)
    await worker_complete
    assign_to_worker(run_tests)
    await worker_complete
```

---

### Error 3: Parallel with Shared Mutable State
```
# INVALID
shared_state = {}
|| worker1: shared_state['a'] = compute_a()
|| worker2: shared_state['b'] = compute_b()  # Race condition!
```

**Why Invalid:** Parallel execution without isolation creates race conditions and undefined behavior.

**Fix:**
```
|| worker1: result_a = compute_a()  # Isolated
|| worker2: result_b = compute_b()  # Isolated
⋀ merge:
    combined = {'a': result_a, 'b': result_b}
```

---

### Error 4: Loop Without Termination
```
# INVALID
while True:
    task = get_next()
    execute(task)
    # No exit condition!
```

**Why Invalid:** Infinite loops without termination conditions exhaust resources and never complete.

**Fix:**
```
while has_tasks(state):
    task = get_next(state)
    execute(task)
    update_state(task, DONE)
    if all_complete(state):
        break
```

---

### Error 5: Sequential with No Context Passing
```
# INVALID
task_a → task_b → task_c
# But no output flows between them
```

**Why Invalid:** Sequential composition implies data flow. Without it, there's no reason for ordering.

**Fix:**
```
result_a = task_a()
result_b = task_b(context=result_a)
result_c = task_c(context=result_b)
```

Or use parallel if truly independent:
```
|| task_a
|| task_b
|| task_c
```

---

### Error 6: Nested Without Lifecycle Respect
```
# INVALID
outer:
    inner:
        long_running_task()
    # outer exits before inner completes
```

**Why Invalid:** Inner patterns must complete within outer's lifecycle. Orphaned inner processes create undefined state.

**Fix:**
```
outer:
    inner:
        long_running_task()
    await inner.complete  # Explicit synchronization
```

---

### Error 7: Quality Gate After Commit
```
# INVALID
execute(task)
commit(result)           # Already committed!
if quality_gate(result): # Too late
    proceed()
```

**Why Invalid:** Quality gates must precede irreversible actions. Checking after commit is pointless.

**Fix:**
```
execute(task)
if quality_gate(result):
    commit(result)
    proceed()
else:
    rollback()
```

---

### Checkpoint: Syntax Errors
**You should now understand:**
- [ ] Why workers must never spawn sub-workers (Error 1)
- [ ] Why orchestrators must never use tools directly (Error 2)
- [ ] Why parallel execution requires isolated state (Error 3)
- [ ] Why loops need termination conditions (Error 4)
- [ ] Why quality gates must precede commits (Error 7)

**If unclear:** For each error, compare the "INVALID" code with the "Fix" to see the correction.

---

## Pattern Templates

### Template 1: Basic Autonomous Loop (Ralph Core)
```
initialize_state(source=PRD)

while not terminated:
    # Phase 1: Selection
    task = get_next_task(state, priority=highest_ready)
    if task is None:
        if all_complete(state):
            exit(SUCCESS)
        else:
            wait_or_request_unblock()
            continue

    # Phase 2: Execution
    mark_in_progress(task)
    result = execute(task)

    # Phase 3: Verification
    if quality_gate(result):
        commit(result)
        mark_complete(task)
        update_dependencies(task)
    else:
        mark_failed(task, result.errors)
        if retriable(task):
            schedule_retry(task)
        else:
            escalate(task)

    # Phase 4: Continuation
    persist_state()
```

---

### Template 2: Parallel Worker Pool (CC Mirror Core)
```
# Orchestrator
objective = parse_input()
tasks = decompose(objective)
worktrees = create_worktrees(count=len(tasks))

for task, worktree in zip(tasks, worktrees):
    spawn_worker(task, worktree)

while not all_complete(workers):
    completed = await_any(workers)
    validate_result(completed)

merge_worktrees(worktrees, strategy=sequential)
cleanup_worktrees()
report_completion()

# Worker (runs in each worktree)
task = receive()
checkout_branch(task.branch)
execute(task)
commit(task.result)
signal_complete()
```

---

### Template 3: Retry with Exponential Backoff
```
MAX_ATTEMPTS = 3
BASE_DELAY = 1

for attempt in range(MAX_ATTEMPTS):
    result = execute(task)

    if success(result):
        return result

    if not retriable(result.error):
        raise UnrecoverableError(result)

    if attempt < MAX_ATTEMPTS - 1:
        delay = BASE_DELAY * (2 ** attempt)
        wait(delay)
        task = refine(task, result.error)

escalate(task, all_attempts=results)
```

---

### Template 4: State Machine Execution
```
states = {PENDING, IN_PROGRESS, BLOCKED, DONE, FAILED}
transitions = {
    PENDING: [IN_PROGRESS, BLOCKED],
    IN_PROGRESS: [DONE, FAILED, BLOCKED],
    BLOCKED: [PENDING],  # After unblock
    DONE: [],            # Terminal
    FAILED: [PENDING]    # After retry decision
}

def transition(task, new_state):
    if new_state not in transitions[task.state]:
        raise InvalidTransition(task.state, new_state)
    task.state = new_state
    persist(task)

def execute_state_machine(task):
    transition(task, IN_PROGRESS)
    result = execute(task)
    if success(result):
        transition(task, DONE)
    elif blocked(result):
        transition(task, BLOCKED)
        notify_blocker(task.blocker)
    else:
        transition(task, FAILED)
        handle_failure(task)
```

---

### Template 5: Hierarchical Decomposition
```
def execute_hierarchical(objective, depth=0, max_depth=3):
    if depth >= max_depth:
        return execute_atomic(objective)

    if is_atomic(objective):
        return execute_atomic(objective)

    subtasks = decompose(objective)
    results = []

    for subtask in subtasks:
        result = execute_hierarchical(subtask, depth+1, max_depth)
        results.append(result)

        if not success(result):
            # Decide: continue, retry, or abort
            if critical(subtask):
                abort(objective, failed_at=subtask)

    return aggregate(results)
```

---

### Checkpoint: Pattern Templates
**You should now understand:**
- [ ] Template 1 (Ralph Core): Selection → Execution → Verification → Continuation
- [ ] Template 2 (CC Mirror): Orchestrator spawns workers in worktrees, awaits, merges
- [ ] Template 3 (Retry): Exponential backoff with max attempts
- [ ] Template 4 (State Machine): Valid state transitions prevent invalid operations

**If unclear:** Implement Template 1 manually in bash to internalize the flow.

---

## Syntax Validation Checklist

Use this checklist to verify your pattern composition is syntactically valid before implementation.

### Role Separation
- [ ] Orchestrators only coordinate (no tool use)
- [ ] Workers only execute (no task creation)
- [ ] Clear handoff points between roles

### State Management
- [ ] State is explicitly defined and persisted
- [ ] State transitions are valid (use state machine)
- [ ] Parallel workers have isolated state (worktrees)
- [ ] Shared state only modified at sync points

### Loop Integrity
- [ ] Every loop has a termination condition
- [ ] Termination is reachable (not infinitely blocked)
- [ ] Progress is made each iteration
- [ ] State is persisted across iterations (resume capability)

### Parallel Safety
- [ ] Parallel units are independent
- [ ] No shared mutable state during parallel execution
- [ ] Clear fork and join points
- [ ] Merge strategy defined for joining

### Sequential Flow
- [ ] Data flows from predecessor to successor
- [ ] Error handling at each step
- [ ] No orphaned outputs
- [ ] Context preserved across steps

### Quality Gates
- [ ] Gates precede irreversible actions
- [ ] Clear pass/fail criteria
- [ ] Failure paths defined
- [ ] No commits before verification

### Error Handling
- [ ] All paths handle failure
- [ ] Retry logic is bounded
- [ ] Escalation path to human exists
- [ ] Cleanup runs even on failure

### Lifecycle Respect
- [ ] Inner patterns complete before outer exits
- [ ] Resources cleaned up on all paths
- [ ] No orphaned processes
- [ ] Proper shutdown signaling

---

## Composition Grammar (Formal)

```ebnf
pattern     ::= primitive | composition
primitive   ::= task | state | quality_gate | human_checkpoint
composition ::= sequential | parallel | nested | conditional | loop

sequential  ::= pattern '→' pattern
parallel    ::= pattern '||' pattern
nested      ::= pattern '⊃' '(' pattern ')'
conditional ::= predicate '?' pattern ':' pattern
loop        ::= 'while' predicate ':' pattern
              | 'for' iterator ':' pattern

predicate   ::= quality_check | state_check | completion_check
quality_check    ::= 'passes(' result ')'
state_check      ::= 'has_tasks(' state ')' | 'all_complete(' state ')'
completion_check ::= 'done' | 'timeout' | 'interrupted'

fork_join   ::= '⋔' parallel_group '→' '⋀' merge_strategy
parallel_group ::= pattern ('||' pattern)*
merge_strategy ::= 'sequential' | 'octopus' | 'resolve_conflicts'
```

---

## Quick Reference

| Operator | Symbol | Meaning | Key Constraint |
|----------|--------|---------|----------------|
| Sequential | `→` | A then B | A must complete successfully |
| Parallel | `||` | A and B concurrently | Must be independent |
| Nested | `⊃` | A contains B | B lifecycle ⊆ A lifecycle |
| Conditional | `?:` | If X then A else B | Exactly one branch |
| Loop | `while` | Repeat until condition | Must terminate |
| Fork-Join | `⋔⋀` | Split and merge | Defined merge strategy |

---

## Common Anti-Patterns

| Anti-Pattern | Symptom | Resolution |
|--------------|---------|------------|
| God Worker | Worker does coordination | Split into orchestrator + worker |
| Phantom State | State not persisted | Add explicit persistence |
| Runaway Loop | Never terminates | Add termination condition |
| Race Condition | Parallel + shared state | Isolate with worktrees |
| Late Gate | Quality check after commit | Move gate before commit |
| Orphan Process | Inner outlives outer | Await inner completion |
| Silent Failure | Error swallowed | Add error handling path |
| Infinite Retry | Unbounded retry loop | Add max attempts |

---

*This grammar enables composing complex agentic systems from validated primitives. Every pattern should be expressible in these terms; if it's not, either the pattern needs refactoring or the grammar needs extension.*

---

## Troubleshooting

### Common Issue: Loop Never Terminates

**Symptom:** Ralph loop runs forever, burning API costs

**Cause:** No reachable termination condition, or stop-condition never triggers

**Fix:**
1. Verify your stop-condition is detectable:
```bash
# Check if COMPLETE marker is being written
grep -r "COMPLETE" .

# Verify detection logic
if grep -q "<promise>COMPLETE</promise>" output.txt; then
    echo "Would exit here"
fi
```

2. Add bounded iteration as safety:
```bash
# Bounded loop with early exit
for (( i=1; i<=25; i++ )); do
    output=$(claude -p "$(cat PROMPT.md)")
    echo "$output" | tee output.txt
    if grep -q "<promise>COMPLETE</promise>" output.txt; then
        echo "Completed at iteration $i"
        break
    fi
done
```

---

### Common Issue: Parallel Workers Conflict

**Symptom:** Merge conflicts, overwritten changes, race conditions

**Cause:** Parallel workers sharing mutable state (same branch, same files)

**Fix:** Use worktree isolation:
```bash
# Create isolated worktrees for each worker
git worktree add ../worker-1 -b feature-auth
git worktree add ../worker-2 -b feature-payment
git worktree add ../worker-3 -b feature-notifications

# Workers operate in isolation
cd ../worker-1 && claude "implement auth"
cd ../worker-2 && claude "implement payment"
cd ../worker-3 && claude "implement notifications"

# Merge sequentially at join point
git checkout main
git merge feature-auth
git merge feature-payment
git merge feature-notifications

# Cleanup
git worktree remove ../worker-1
git worktree remove ../worker-2
git worktree remove ../worker-3
```

---

### Common Issue: Orchestrator Doing Worker's Job

**Symptom:** Orchestrator context fills up, quality degrades, no task isolation

**Cause:** Orchestrator writing code instead of delegating to workers

**Fix:** Verify orchestrator tool usage:
```
ALLOWED for Orchestrators:
- Read (1-2 files max for orientation)
- Task, TaskCreate, TaskUpdate, TaskList, TaskGet
- AskUserQuestion

FORBIDDEN for Orchestrators:
- Write, Edit (code modification)
- Bash (command execution)
- Grep, Glob (extensive searching)
```

If orchestrator needs to understand code, spawn a research subagent:
```python
# Instead of:
orchestrator.read_many_files()  # Pollutes context

# Do this:
Task("Analyze the auth module and summarize key patterns")
```

---

### Common Issue: Quality Gate After Commit

**Symptom:** Bad code gets committed, requires manual revert

**Cause:** Gate ordering wrong—commit happens before verification

**Fix:** Always verify BEFORE commit:
```bash
# WRONG order
git commit -m "feature"
npm test  # Too late!

# CORRECT order
npm run typecheck && npm test && npm run lint
if [ $? -eq 0 ]; then
    git commit -m "feature: verified"
else
    echo "Quality gate failed, not committing"
fi
```

---

### Common Issue: Sequential Chain Breaks Silently

**Symptom:** Later steps in sequence never run, no error visible

**Cause:** Using `;` instead of `&&`, or swallowing errors

**Fix:** Use explicit error handling:
```bash
# Silent failure (bad)
task_a; task_b; task_c

# Explicit chaining (good)
task_a && task_b && task_c

# With error capture (better)
set -e  # Exit on any error
task_a
task_b
task_c
```

---

### Common Issue: Pattern Doesn't Fit Grammar

**Symptom:** Can't express your design using the composition operators

**Cause:** Either the pattern is invalid, or it needs decomposition

**Fix:**
1. Break pattern into smaller pieces:
```
# Too complex
ComplexPattern

# Decomposed
Part1 → Part2 → Part3
where Part2 = SubA || SubB
```

2. Check against the formal grammar (EBNF section)
3. If truly valid but not expressible, document as grammar extension candidate

---

## Tags

`#syntax` `#grammar` `#composition` `#operators` `#validation` `#templates` `#anti-patterns`
