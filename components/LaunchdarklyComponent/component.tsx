import { useLayoutEffect } from "react";
import { useSuperblocksIsLoading } from "@superblocksteam/custom-components";
import { LDProvider, useFlags } from "launchdarkly-react-client-sdk";
import { type Props } from "./types";

// helpers
import { applyFeatureFlags } from "./utils";

const FeatureFlagsManager = ({
  configs,
}: {
  configs: Record<string, string[]>;
}) => {
  const flags = useFlags();

  useLayoutEffect(() => {
    if (flags) {
      applyFeatureFlags(flags, configs);
    }
  }, [flags, configs]);

  return null;
};

export default function Component({ launchdarklyClientId, configs }: Props) {
  const isLoading = useSuperblocksIsLoading();

  if (!launchdarklyClientId || !configs || isLoading) {
    return null;
  }

  return (
    <LDProvider clientSideID={launchdarklyClientId}>
      <FeatureFlagsManager configs={configs} />
    </LDProvider>
  );
}
