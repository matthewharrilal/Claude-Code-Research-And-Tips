import { Check, GitBranch } from 'lucide-react'

interface DecisionBranch {
  condition: string
  yes: string
  no: string
}

interface TaskStep {
  title: string
  description?: string | React.ReactNode
  code?: string
  decision?: DecisionBranch
  tip?: string
}

interface PathOfTaskProps {
  title?: string
  steps: TaskStep[]
}

export function PathOfTask({ title, steps }: PathOfTaskProps) {
  return (
    <div className="mb-8">
      {title && (
        <h3 className="text-xl font-bold text-text-primary mb-6">{title}</h3>
      )}

      <div className="relative">
        {/* Vertical line connecting steps */}
        <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-border" />

        <ol className="space-y-6">
          {steps.map((step, index) => (
            <li key={index} className="relative pl-14">
              {/* Step number circle */}
              <div className="absolute left-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg z-10">
                {index + 1}
              </div>

              <div className="bg-white border border-border rounded-lg p-5">
                {/* Step title */}
                <h4 className="font-semibold text-text-primary text-lg mb-2">
                  {step.title}
                </h4>

                {/* Description */}
                {step.description && (
                  <div className="text-text-secondary mb-3">
                    {typeof step.description === 'string' ? (
                      <p>{step.description}</p>
                    ) : (
                      step.description
                    )}
                  </div>
                )}

                {/* Code block */}
                {step.code && (
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm font-mono mb-3">
                    <code>{step.code}</code>
                  </pre>
                )}

                {/* Decision branch */}
                {step.decision && (
                  <div className="mt-4 border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-text-muted mb-3">
                      <GitBranch className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {step.decision.condition}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-success-light/10 border border-success-light/30 rounded-lg p-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-success block mb-1">
                          Yes
                        </span>
                        <p className="text-sm text-text-secondary">
                          {step.decision.yes}
                        </p>
                      </div>
                      <div className="bg-error-light/10 border border-error-light/30 rounded-lg p-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-error block mb-1">
                          No
                        </span>
                        <p className="text-sm text-text-secondary">
                          {step.decision.no}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tip */}
                {step.tip && (
                  <div className="mt-3 flex items-start gap-2 text-sm text-accent">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{step.tip}</span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
