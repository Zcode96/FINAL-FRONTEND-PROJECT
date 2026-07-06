// src/components/atoms/SalesInput.tsx
export const SalesInput = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => (
  <input
    type="number"
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
    placeholder="e.g. 50000"
  />
);