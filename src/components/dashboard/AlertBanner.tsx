import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AlertBannerProps {
  isActive: boolean;
  severity: 'low' | 'medium' | 'high';
  message: string;
  onDismiss?: () => void;
}

export function AlertBanner({ isActive, severity, message, onDismiss }: AlertBannerProps) {
  if (!isActive) return null;

  const severityConfig = {
    low: {
      color: 'border-neon-yellow text-neon-yellow',
      bgColor: 'bg-neon-yellow/10',
      icon: '⚠️'
    },
    medium: {
      color: 'border-neon-blue text-neon-blue',
      bgColor: 'bg-neon-blue/10',
      icon: '🔔'
    },
    high: {
      color: 'border-neon-red text-neon-red',
      bgColor: 'bg-neon-red/10',
      icon: '🚨'
    }
  };

  const config = severityConfig[severity];

  return (
    <div className={cn(
      "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl mx-4",
      severity === 'high' && "pulse-alert"
    )}>
      <Alert className={cn(
        "border-2 shadow-lg backdrop-blur-sm",
        config.color,
        config.bgColor
      )}>
        <div className="flex items-center gap-3">
          <div className="text-2xl">{config.icon}</div>
          <AlertTriangle className="h-5 w-5" />
          <div className="flex-1">
            <h4 className="font-semibold text-lg mb-1">
              🔔 Negative Sentiment Alert
            </h4>
            <AlertDescription className="text-base">
              {message}
            </AlertDescription>
          </div>
          {onDismiss && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onDismiss}
              className="hover:bg-transparent"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </Alert>
    </div>
  );
}