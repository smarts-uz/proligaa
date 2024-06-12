// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: Jp7234NpnANy

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicMarketPlayer.module.css"; // plasmic-import: Jp7234NpnANy/css

createPlasmicElementProxy;

export type PlasmicMarketPlayer__VariantMembers = {};
export type PlasmicMarketPlayer__VariantsArgs = {};
type VariantPropType = keyof PlasmicMarketPlayer__VariantsArgs;
export const PlasmicMarketPlayer__VariantProps = new Array<VariantPropType>();

export type PlasmicMarketPlayer__ArgsType = {
  onImagesChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicMarketPlayer__ArgsType;
export const PlasmicMarketPlayer__ArgProps = new Array<ArgPropType>(
  "onImagesChange"
);

export type PlasmicMarketPlayer__OverridesType = {
  root?: Flex__<"div">;
  playerName?: Flex__<"div">;
  position?: Flex__<"div">;
  price?: Flex__<"div">;
  team?: Flex__<"div">;
  fsyp?: Flex__<"div">;
  point?: Flex__<"div">;
};

export interface DefaultMarketPlayerProps {
  onImagesChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMarketPlayer__RenderFunc(props: {
  variants: PlasmicMarketPlayer__VariantsArgs;
  args: PlasmicMarketPlayer__ArgsType;
  overrides: PlasmicMarketPlayer__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "variable",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return undefined;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return {};
              }
              throw e;
            }
          })()
      },
      {
        path: "images",
        type: "readonly",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $queries.query.data;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return {};
              }
              throw e;
            }
          })(),

        onChangeProp: "onImagesChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "5785d4e9-205f-401e-8e78-e8b37b031070",
        userArgs: {},
        cacheKey: `plasmic.$.5785d4e9-205f-401e-8e78-e8b37b031070.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    club: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "81587a77-6aad-402c-919c-fd97d198ae18",
        userArgs: {},
        cacheKey: `plasmic.$.81587a77-6aad-402c-919c-fd97d198ae18.$.`,
        invalidatedKeys: null,
        roleId: "f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
        (() => {
          try {
            return $queries.query.data;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return [];
            }
            throw e;
          }
        })()
      ).map((__plasmic_item_0, __plasmic_idx_0) => {
        const currentItem = __plasmic_item_0;
        const currentIndex = __plasmic_idx_0;
        return (
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__w71JL)}
            key={currentIndex}
            onClick={async event => {
              const $steps = {};

              $steps["runElementAction"] = true
                ? (() => {
                    const actionArgs = {};
                    return (({ tplRef, action, args }) => {
                      return $refs?.[tplRef]?.[action]?.(...(args ?? []));
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runElementAction"] != null &&
                typeof $steps["runElementAction"] === "object" &&
                typeof $steps["runElementAction"].then === "function"
              ) {
                $steps["runElementAction"] = await $steps["runElementAction"];
              }
            }}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__kqasQ)}
              displayHeight={"40px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"40px"}
              loading={"lazy"}
              src={(() => {
                try {
                  return currentItem.image;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
            />

            <div
              data-plasmic-name={"playerName"}
              data-plasmic-override={overrides.playerName}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.playerName
              )}
            >
              <div
                className={projectcss.__wab_expr_html_text}
                dangerouslySetInnerHTML={{
                  __html: (() => {
                    try {
                      return currentItem.name;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()
                }}
              />
            </div>
            <div
              data-plasmic-name={"position"}
              data-plasmic-override={overrides.position}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.position
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return currentItem.position;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__bugFd)}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__bmcfK)}
                displayHeight={"14px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"14px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/proliga/images/pngClipartComputerIconsEuroCoinsEuroSignCurrencySymbolEuroTextTrademarkpng.png",
                  fullWidth: 900,
                  fullHeight: 512,
                  aspectRatio: undefined
                }}
              />

              <div
                data-plasmic-name={"price"}
                data-plasmic-override={overrides.price}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.price
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return currentItem.market_value;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__e2A0G)}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__soiFk)}
                displayHeight={"22px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"22px"}
                loading={"lazy"}
                src={(() => {
                  try {
                    return $queries.club.data[currentItem.club_id - 1].flag_url;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
              />

              <div
                data-plasmic-name={"team"}
                data-plasmic-override={overrides.team}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.team
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $queries.club.data[currentItem.club_id - 1].name;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__gqxNg)}
            >
              <div
                data-plasmic-name={"fsyp"}
                data-plasmic-override={overrides.fsyp}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.fsyp
                )}
              >
                {"FSYP"}
              </div>
              <div
                data-plasmic-name={"point"}
                data-plasmic-override={overrides.point}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.point
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return currentItem.shirt_number;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
          </Stack__>
        );
      })}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "playerName", "position", "price", "team", "fsyp", "point"],
  playerName: ["playerName"],
  position: ["position"],
  price: ["price"],
  team: ["team"],
  fsyp: ["fsyp"],
  point: ["point"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  playerName: "div";
  position: "div";
  price: "div";
  team: "div";
  fsyp: "div";
  point: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMarketPlayer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMarketPlayer__VariantsArgs;
    args?: PlasmicMarketPlayer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMarketPlayer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMarketPlayer__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMarketPlayer__ArgProps,
          internalVariantPropNames: PlasmicMarketPlayer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMarketPlayer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMarketPlayer";
  } else {
    func.displayName = `PlasmicMarketPlayer.${nodeName}`;
  }
  return func;
}

export const PlasmicMarketPlayer = Object.assign(
  // Top-level PlasmicMarketPlayer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    playerName: makeNodeComponent("playerName"),
    position: makeNodeComponent("position"),
    price: makeNodeComponent("price"),
    team: makeNodeComponent("team"),
    fsyp: makeNodeComponent("fsyp"),
    point: makeNodeComponent("point"),

    // Metadata about props expected for PlasmicMarketPlayer
    internalVariantProps: PlasmicMarketPlayer__VariantProps,
    internalArgProps: PlasmicMarketPlayer__ArgProps
  }
);

export default PlasmicMarketPlayer;
/* prettier-ignore-end */
