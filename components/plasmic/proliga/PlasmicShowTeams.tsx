// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: Q5DWXsGHGePI

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariants_8Rmrqs5Mzp6I } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8Rmrqs5Mzp6I/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicShowTeams.module.css"; // plasmic-import: Q5DWXsGHGePI/css

createPlasmicElementProxy;

export type PlasmicShowTeams__VariantMembers = {};
export type PlasmicShowTeams__VariantsArgs = {};
type VariantPropType = keyof PlasmicShowTeams__VariantsArgs;
export const PlasmicShowTeams__VariantProps = new Array<VariantPropType>();

export type PlasmicShowTeams__ArgsType = {};
type ArgPropType = keyof PlasmicShowTeams__ArgsType;
export const PlasmicShowTeams__ArgProps = new Array<ArgPropType>();

export type PlasmicShowTeams__OverridesType = {
  root?: Flex__<"div">;
  h1?: Flex__<"h1">;
  freeBox?: Flex__<"div">;
  columns?: Flex__<"div">;
  column?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultShowTeamsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicShowTeams__RenderFunc(props: {
  variants: PlasmicShowTeams__VariantsArgs;
  args: PlasmicShowTeams__ArgsType;
  overrides: PlasmicShowTeams__OverridesType;
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
        path: "currentChampionship",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
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
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    compotetion: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "a3926ae2-ba51-4cc3-a479-7fb855fe9bdb",
        userArgs: {},
        cacheKey: `plasmic.$.${(() => {
          try {
            return "getOne";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.a3926ae2-ba51-4cc3-a479-7fb855fe9bdb.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    team: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "953bfba6-6599-4384-99b8-a2fe13174a9a",
        userArgs: {
          query: [$state.currentChampionship]
        },
        cacheKey: `plasmic.$.953bfba6-6599-4384-99b8-a2fe13174a9a.$.`,
        invalidatedKeys: null,
        roleId: "f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_8Rmrqs5Mzp6I()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
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
        <h1
          data-plasmic-name={"h1"}
          data-plasmic-override={overrides.h1}
          className={classNames(
            projectcss.all,
            projectcss.h1,
            projectcss.__wab_text,
            sty.h1
          )}
        >
          {"Choose your game moode"}
        </h1>
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            hasGap={true}
            className={classNames(projectcss.all, sty.columns)}
          >
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $queries.compotetion.data;
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
                  data-plasmic-name={"column"}
                  data-plasmic-override={overrides.column}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column)}
                  key={currentIndex}
                  onClick={async event => {
                    const $steps = {};

                    $steps["updateCurrentChampionship"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["currentChampionship"]
                            },
                            operation: 0,
                            value: currentItem.id
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;

                            $stateSet(objRoot, variablePath, value);
                            return value;
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["updateCurrentChampionship"] != null &&
                      typeof $steps["updateCurrentChampionship"] === "object" &&
                      typeof $steps["updateCurrentChampionship"].then ===
                        "function"
                    ) {
                      $steps["updateCurrentChampionship"] = await $steps[
                        "updateCurrentChampionship"
                      ];
                    }
                  }}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__jYf06)}
                    displayHeight={"136px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"318px"}
                    loading={"lazy"}
                    onClick={async event => {
                      const $steps = {};

                      $steps["createTeam"] =
                        $queries.team.data?.length === 0
                          ? (() => {
                              const actionArgs = {
                                dataOp: {
                                  sourceId: "8cdHi4ivRUEkK6qbegQevF",
                                  opId: "6798d78b-b4ff-4a2d-97de-d3e96f1f0f4c",
                                  userArgs: {
                                    variables: [currentItem.id]
                                  },
                                  cacheKey: null,
                                  invalidatedKeys: ["plasmic_refresh_all"],
                                  roleId: null
                                }
                              };
                              return (async ({ dataOp, continueOnError }) => {
                                try {
                                  const response = await executePlasmicDataOp(
                                    dataOp,
                                    {
                                      userAuthToken:
                                        dataSourcesCtx?.userAuthToken,
                                      user: dataSourcesCtx?.user
                                    }
                                  );
                                  await plasmicInvalidate(
                                    dataOp.invalidatedKeys
                                  );
                                  return response;
                                } catch (e) {
                                  if (!continueOnError) {
                                    throw e;
                                  }
                                  return e;
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                      if (
                        $steps["createTeam"] != null &&
                        typeof $steps["createTeam"] === "object" &&
                        typeof $steps["createTeam"].then === "function"
                      ) {
                        $steps["createTeam"] = await $steps["createTeam"];
                      }

                      $steps["updateCurrentChampionship3"] = true
                        ? (() => {
                            const actionArgs = {
                              destination: `/user/team/${(() => {
                                try {
                                  return $queries.team.data[0].id;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()}`
                            };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                __nextRouter?.push(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["updateCurrentChampionship3"] != null &&
                        typeof $steps["updateCurrentChampionship3"] ===
                          "object" &&
                        typeof $steps["updateCurrentChampionship3"].then ===
                          "function"
                      ) {
                        $steps["updateCurrentChampionship3"] = await $steps[
                          "updateCurrentChampionship3"
                        ];
                      }
                    }}
                    src={(() => {
                      try {
                        return currentItem.flag;
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
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return currentItem.title;
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
              );
            })}
          </Stack__>
        </div>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__tpQo)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"70px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/proliga/images/group33Png.png",
            fullWidth: 582,
            fullHeight: 766,
            aspectRatio: undefined
          }}
        />
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "freeBox", "columns", "column", "text"],
  h1: ["h1"],
  freeBox: ["freeBox", "columns", "column", "text"],
  columns: ["columns", "column", "text"],
  column: ["column", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  freeBox: "div";
  columns: "div";
  column: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicShowTeams__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicShowTeams__VariantsArgs;
    args?: PlasmicShowTeams__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicShowTeams__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicShowTeams__ArgsType,
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
          internalArgPropNames: PlasmicShowTeams__ArgProps,
          internalVariantPropNames: PlasmicShowTeams__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicShowTeams__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicShowTeams";
  } else {
    func.displayName = `PlasmicShowTeams.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={"f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"}
      appId={"tDWy3GXn2mzd9e2xUaPdmu"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={false}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

export const PlasmicShowTeams = Object.assign(
  // Top-level PlasmicShowTeams renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicShowTeams
    internalVariantProps: PlasmicShowTeams__VariantProps,
    internalArgProps: PlasmicShowTeams__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicShowTeams;
/* prettier-ignore-end */
