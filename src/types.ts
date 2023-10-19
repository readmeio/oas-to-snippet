import type { ClientId, TargetId } from '@readme/httpsnippet/targets';
import type { AuthForHAR, DataForHAR } from '@readme/oas-to-har/lib/types';

type SupportedTargets = Exclude<TargetId, 'objc'> | 'cplusplus' | 'objectivec';
type SupportedLanguages = Record<
  SupportedTargets,
  {
    highlight: string;
    httpsnippet: {
      default: ClientId;
      lang: TargetId;
      targets: Record<
        ClientId,
        {
          install?: string;
          name: string;
          opts?: Record<string, unknown>;
        }
      >;
    };
  }
>;

export type { AuthForHAR, DataForHAR, SupportedLanguages, SupportedTargets };
