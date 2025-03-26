import { useEffect, useLayoutEffect } from "react";
import { useSuperblocksIsLoading } from "@superblocksteam/custom-components";
import { LDProvider, useFlags } from "launchdarkly-react-client-sdk";
import { type Props } from "./types";

// helpers
import { applyFeatureFlags, manageGlobalOverlay } from "./utils";

manageGlobalOverlay.create();

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

  useEffect(() => {
    setTimeout(() => {
      manageGlobalOverlay.remove();
    }, 1000);
  }, []);

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
