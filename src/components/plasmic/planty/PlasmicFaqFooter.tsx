// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qypGRFiT5EqbMS3JE3NhBQ
// Component: oj1BI7sC_i_EFR
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MenuButton from "../../MenuButton"; // plasmic-import: B6DM_ThZsY13JO/component

import { useScreenVariants as useScreenVariantsgOmXfJvEYn5Htg } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GOmXfJvEYn5HTG/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: qypGRFiT5EqbMS3JE3NhBQ/projectcss
import sty from "./PlasmicFaqFooter.module.css"; // plasmic-import: oj1BI7sC_i_EFR/css

import LocationSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__LocationSvgrepoCom1Svg"; // plasmic-import: CQdrFD_ATSxEU4/icon
import LogoWhitesvgIcon from "./icons/PlasmicIcon__LogoWhitesvg"; // plasmic-import: qG16EiYJgqIGUV/icon
import promowebpXJMjiB5Kd1MqgC from "./images/promowebp.webp"; // plasmic-import: xJMjiB5kd1mqgC/picture

export type PlasmicFaqFooter__VariantMembers = {};
export type PlasmicFaqFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFaqFooter__VariantsArgs;
export const PlasmicFaqFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFaqFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFaqFooter__ArgsType;
export const PlasmicFaqFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFaqFooter__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  h1?: p.Flex<"h1">;
  menuButton?: p.Flex<typeof MenuButton>;
};

export interface DefaultFaqFooterProps {
  className?: string;
}

function PlasmicFaqFooter__RenderFunc(props: {
  variants: PlasmicFaqFooter__VariantsArgs;
  args: PlasmicFaqFooter__ArgsType;
  overrides: PlasmicFaqFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgOmXfJvEYn5Htg()
  });

  return (
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
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__cmmqo)}>
          <div className={classNames(projectcss.all, sty.columns___1QNm)}>
            <div className={classNames(projectcss.all, sty.column__hqWS)}>
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"562px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"947px" as const}
                loading={"lazy" as const}
                src={{
                  src: promowebpXJMjiB5Kd1MqgC,
                  fullWidth: 720,
                  fullHeight: 525,
                  aspectRatio: undefined
                }}
              />
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column___0T9W4)}
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
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "Behold our FAQ"
                  : "Still have questions?\nContact us. "}
              </h1>

              <div className={classNames(projectcss.all, sty.columns__uPJsX)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__iEjIi)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0OJa
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Behold our FAQ"
                      : "226 rue St-Joseph E, \nQu??bec, QC, Canada, \nG1K 3A9"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nAaub
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Behold our FAQ"
                      : "+1-202-555-0112"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__x5Xr9)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aVeX
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Behold our FAQ"
                      : "geeks@snipcart.com"}
                  </div>

                  {(
                    hasVariant(globalVariants, "screen", "mobile") ? true : true
                  ) ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__bU1G5)}
                    >
                      {(
                        hasVariant(globalVariants, "screen", "mobile")
                          ? true
                          : true
                      ) ? (
                        <p.Stack
                          as={"a"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__y8Sj1
                          )}
                        >
                          <LocationSvgrepoCom1SvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___8BzTo
                            )}
                            role={"img"}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__aQtiw
                            )}
                          >
                            {hasVariant(globalVariants, "screen", "mobile")
                              ? "Discover"
                              : "On the map"}
                          </div>
                        </p.Stack>
                      ) : null}
                    </div>
                  ) : null}
                </p.Stack>

                <div
                  className={classNames(projectcss.all, sty.column__sjo30)}
                />
              </div>
            </p.Stack>
          </div>
        </div>
      ) : null}
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__s3Orb)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__l65Pl)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__yjjMj)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              ) ? (
                <MenuButton
                  data-plasmic-name={"menuButton"}
                  data-plasmic-override={overrides.menuButton}
                  className={classNames("__wab_instance", sty.menuButton)}
                />
              ) : null}
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__xWb0K)}
                >
                  <LogoWhitesvgIcon
                    className={classNames(projectcss.all, sty.svg__ahFuU)}
                    role={"img"}
                  />

                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__rtdFm
                    )}
                    href={"#" as const}
                  >
                    {"Store"}
                  </a>

                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__hxUkP
                    )}
                    href={"#" as const}
                  >
                    {"About"}
                  </a>

                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__h8NJd
                    )}
                    href={"#" as const}
                  >
                    {"Faq"}
                  </a>
                </p.Stack>
              ) : null}

              <div className={classNames(projectcss.all, sty.freeBox___9FniV)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__v7Nkw
                  )}
                >
                  {
                    "?? Company. All rights reserved. This site proudly built with "
                  }
                </div>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__v3CzX
                  )}
                  href={"https://www.plasmic.app/" as const}
                >
                  {"Plasmic"}
                </a>
              </div>
            </p.Stack>
          </p.Stack>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "h1", "menuButton"],
  img: ["img"],
  h1: ["h1"],
  menuButton: ["menuButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  h1: "h1";
  menuButton: typeof MenuButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFaqFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFaqFooter__VariantsArgs;
    args?: PlasmicFaqFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFaqFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFaqFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFaqFooter__ArgProps,
          internalVariantPropNames: PlasmicFaqFooter__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFaqFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFaqFooter";
  } else {
    func.displayName = `PlasmicFaqFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFaqFooter = Object.assign(
  // Top-level PlasmicFaqFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    menuButton: makeNodeComponent("menuButton"),

    // Metadata about props expected for PlasmicFaqFooter
    internalVariantProps: PlasmicFaqFooter__VariantProps,
    internalArgProps: PlasmicFaqFooter__ArgProps
  }
);

export default PlasmicFaqFooter;
/* prettier-ignore-end */
