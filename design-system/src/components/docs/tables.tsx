import { ReactNode } from 'react';

// Standard Comparison Table
interface ComparisonTableProps {
  headers: string[];
  rows: (string | ReactNode)[][];
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto border border-neutral-300">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-neutral-100 border-b border-neutral-300">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="text-left py-4 px-6 font-bold text-neutral-900 text-[10px] uppercase tracking-[0.2em]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-neutral-200 last:border-0 hover:bg-neutral-50 transition-colors">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="py-4 px-6 text-neutral-700 font-light">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Severity Table with color-coded cells
type Severity = 'HIGH' | 'MEDIUM' | 'CRITICAL' | 'LOW';

interface SeverityTableProps {
  headers: string[];
  rows: {
    cells: (string | ReactNode)[];
    severity?: Severity;
  }[];
}

export function SeverityTable({ headers, rows }: SeverityTableProps) {
  const severityColors = {
    CRITICAL: 'bg-red-50 border-l-4 border-red-500',
    HIGH: 'bg-orange-50 border-l-4 border-orange-500',
    MEDIUM: 'bg-yellow-50 border-l-4 border-yellow-500',
    LOW: 'bg-green-50 border-l-4 border-green-500',
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#FAFBFC] border-b border-neutral-200">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="text-left py-3 px-4 font-medium text-neutral-900 text-xs"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`border-b border-neutral-100 last:border-0 ${
                row.severity ? severityColors[row.severity] : ''
              }`}
            >
              {row.cells.map((cell, cellIdx) => (
                <td key={cellIdx} className="py-3 px-4 text-neutral-700 font-light">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Matrix Table with status badges
type MatrixStatus = 'Documented' | 'Synergistic' | 'Possible' | 'Anti-pattern' | 'Unexplored';

interface MatrixTableProps {
  rowHeaders: string[];
  columnHeaders: string[];
  cells: (MatrixStatus | null)[][];
}

function StatusBadgeInTable({ status }: { status: MatrixStatus }) {
  const statusStyles = {
    'Documented': 'bg-green-100 text-green-800 border-green-200',
    'Synergistic': 'bg-blue-100 text-blue-800 border-blue-200',
    'Possible': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Anti-pattern': 'bg-red-100 text-red-800 border-red-200',
    'Unexplored': 'bg-neutral-100 text-neutral-600 border-neutral-200',
  };

  return (
    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium border ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

export function MatrixTable({ rowHeaders, columnHeaders, cells }: MatrixTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#FAFBFC] border-b border-neutral-200">
            <th className="text-left py-3 px-4 font-medium text-neutral-900 text-xs"></th>
            {columnHeaders.map((header, idx) => (
              <th
                key={idx}
                className="text-left py-3 px-4 font-medium text-neutral-900 text-xs"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {rowHeaders.map((rowHeader, rowIdx) => (
            <tr key={rowIdx} className="border-b border-neutral-100 last:border-0">
              <th className="text-left py-3 px-4 font-medium text-neutral-900 text-xs bg-[#FAFBFC]">
                {rowHeader}
              </th>
              {cells[rowIdx].map((cell, cellIdx) => (
                <td key={cellIdx} className="py-3 px-4 text-center">
                  {cell ? <StatusBadgeInTable status={cell} /> : <span className="text-neutral-300">—</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Migration Table
interface MigrationTableRow {
  from: string;
  to: string;
  trigger: string;
  effort: 'Low' | 'Medium' | 'High';
  cost: string;
}

interface MigrationTableProps {
  rows: MigrationTableRow[];
}

export function MigrationTable({ rows }: MigrationTableProps) {
  const effortColors = {
    Low: 'text-green-700 bg-green-50',
    Medium: 'text-yellow-700 bg-yellow-50',
    High: 'text-red-700 bg-red-50',
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#FAFBFC] border-b border-neutral-200">
            <th className="text-left py-3 px-4 font-medium text-neutral-900 text-xs">From</th>
            <th className="text-left py-3 px-4 font-medium text-neutral-900 text-xs">To</th>
            <th className="text-left py-3 px-4 font-medium text-neutral-900 text-xs">Trigger</th>
            <th className="text-left py-3 px-4 font-medium text-neutral-900 text-xs">Effort</th>
            <th className="text-left py-3 px-4 font-medium text-neutral-900 text-xs">Cost</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b border-neutral-100 last:border-0">
              <td className="py-3 px-4 text-neutral-700 font-medium">{row.from}</td>
              <td className="py-3 px-4 text-neutral-700 font-medium">{row.to}</td>
              <td className="py-3 px-4 text-neutral-600 font-light">{row.trigger}</td>
              <td className="py-3 px-4">
                <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${effortColors[row.effort]}`}>
                  {row.effort}
                </span>
              </td>
              <td className="py-3 px-4 text-neutral-700 font-light font-mono text-xs">{row.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
