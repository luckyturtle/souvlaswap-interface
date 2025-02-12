import Button from "app/components/Button";
import Checkbox from "app/components/Checkbox";
import { PoolPanelAssetsLabel } from "app/components/Migrate/PoolPanelAssetsLabel";
import { PoolValueEstimation } from "app/components/Migrate/PoolValueEstimation";
import {
  MigrationSource,
  v2Migration,
} from "app/features/trident/migrate/context/migrateSlice";
import React, { FC } from "react";
import { Pair } from "@sushiswap/core-sdk";

interface PanelProps {
  pair: Pair;
  source: MigrationSource;
  setFunc: (arg0: boolean, migration: v2Migration) => void;
  checkedState: boolean;
}

export const SelectPairMigratePanel: FC<PanelProps> = ({
  pair,
  source,
  setFunc,
  checkedState,
}) => {
  return (
    <div className="w-full border rounded border-1 border-dark-700">
      <div className="flex items-center justify-between p-3 rounded-t bg-dark-900">
        <PoolPanelAssetsLabel pair={pair} />
        <div className="flex">
          <Button color="blue" variant="outlined" size="xs">
            {source}
          </Button>
          <Checkbox
            className="ml-2"
            checked={checkedState}
            set={() => setFunc(!checkedState, { v2Pair: pair })}
          />
        </div>
      </div>
      <PoolValueEstimation pair={pair} roundedBottom />
    </div>
  );
};
