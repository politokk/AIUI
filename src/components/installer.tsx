'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

const commands: Record<PackageManager, string> = {
  npm: 'npx next-forge@latest init',
  pnpm: 'pnpm dlx next-forge@latest init',
  yarn: 'yarn dlx next-forge@latest init',
  bun: 'bunx next-forge@latest init',
};

export const Installer = () => {
  const [selectedPackageManager, setSelectedPackageManager] = useState<PackageManager>('pnpm');
  const [copied, setCopied] = useState(false);
  const command = commands[selectedPackageManager];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="my-4 overflow-hidden rounded-xl border bg-card p-1 shadow-sm not-prose">
      {/* Tabs List */}
      <div className="flex flex-row overflow-x-auto px-1 -mx-1 text-muted-foreground">
        {(Object.keys(commands) as PackageManager[]).map((pm, index) => (
          <button
            key={pm}
            onClick={() => setSelectedPackageManager(pm)}
            className={`relative group inline-flex text-sm font-medium text-nowrap items-center transition-colors gap-2 px-2 py-1.5 hover:text-accent-foreground ${
              selectedPackageManager === pm ? 'text-primary' : ''
            } ${index === 0 ? 'ms-1' : ''}`}
          >
            {pm}
            <div 
              className={`absolute inset-x-2 bottom-0 h-px ${
                selectedPackageManager === pm ? 'bg-primary' : ''
              }`} 
            />
          </button>
        ))}
        
        {/* Copy Button */}
        <button
          type="button"
          className="sticky ms-auto right-0 bg-card backdrop-blur-sm inline-flex items-center justify-center text-sm font-medium transition-colors hover:text-accent-foreground rounded-md px-2 py-1.5"
          aria-label={copied ? 'Copied Text' : 'Copy Text'}
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      {/* Command Display */}
      <div className="rounded-lg border bg-secondary text-[13px] py-3.5 px-4 overflow-auto">
        <pre className="min-w-full w-max">
          <code className="flex items-center gap-2 font-mono">
            <span className="text-muted-foreground select-none">$</span>
            <span>{command}</span>
          </code>
        </pre>
      </div>
    </div>
  );
};