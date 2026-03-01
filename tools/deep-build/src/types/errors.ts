/**
 * Error types for the deep-build orchestrator.
 * 14 error categories from doc 08.
 */

export type ErrorCategory =
  | 'model-overload'
  | 'rate-limit'
  | 'timeout'
  | 'invalid-response'
  | 'html-extraction-failed'
  | 'validation-failed'
  | 'state-corruption'
  | 'config-mismatch'
  | 'budget-exceeded'
  | 'playwright-error'
  | 'file-not-found'
  | 'permission-denied'
  | 'network-error'
  | 'unknown';

export interface ErrorRecord {
  category: ErrorCategory;
  message: string;
  passNumber?: number;
  subsetId?: number;
  role?: string;
  timestamp: string;
  recovered: boolean;
  retryAttempt?: number;
  stack?: string;
}

export class OrchestratorError extends Error {
  readonly category: ErrorCategory;
  readonly recovered: boolean;

  constructor(message: string, category: ErrorCategory, recovered = false) {
    super(message);
    this.name = 'OrchestratorError';
    this.category = category;
    this.recovered = recovered;
  }

  toRecord(context?: { passNumber?: number; subsetId?: number; role?: string; retryAttempt?: number }): ErrorRecord {
    return {
      category: this.category,
      message: this.message,
      passNumber: context?.passNumber,
      subsetId: context?.subsetId,
      role: context?.role,
      timestamp: new Date().toISOString(),
      recovered: this.recovered,
      retryAttempt: context?.retryAttempt,
      stack: this.stack,
    };
  }
}

export class ValidationError extends OrchestratorError {
  constructor(message: string) {
    super(message, 'validation-failed');
    this.name = 'ValidationError';
  }
}

export class ClaudeInvocationError extends OrchestratorError {
  constructor(message: string, category: ErrorCategory = 'unknown') {
    super(message, category);
    this.name = 'ClaudeInvocationError';
  }
}

export class StateCorruptionError extends OrchestratorError {
  constructor(message: string) {
    super(message, 'state-corruption');
    this.name = 'StateCorruptionError';
  }
}

export class BudgetExceededError extends OrchestratorError {
  readonly currentCost: number;
  readonly budgetCap: number;

  constructor(currentCost: number, budgetCap: number) {
    super(`Budget exceeded: $${currentCost.toFixed(2)} > $${budgetCap} cap`, 'budget-exceeded');
    this.name = 'BudgetExceededError';
    this.currentCost = currentCost;
    this.budgetCap = budgetCap;
  }
}

export class HtmlExtractionError extends OrchestratorError {
  constructor(message: string) {
    super(message, 'html-extraction-failed');
    this.name = 'HtmlExtractionError';
  }
}

export class PlaywrightError extends OrchestratorError {
  constructor(message: string) {
    super(message, 'playwright-error');
    this.name = 'PlaywrightError';
  }
}

export class FileNotFoundError extends OrchestratorError {
  readonly filePath: string;

  constructor(filePath: string) {
    super(`File not found: ${filePath}`, 'file-not-found');
    this.name = 'FileNotFoundError';
    this.filePath = filePath;
  }
}

export class ConfigMismatchError extends OrchestratorError {
  constructor(message: string) {
    super(message, 'config-mismatch');
    this.name = 'ConfigMismatchError';
  }
}
