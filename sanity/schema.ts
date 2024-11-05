import { type SchemaTypeDefinition } from "sanity";
// documents
import page from "./schemas/documents/page";

// Schema UI objects
import link from "./schemas/blocks/shared/link";
import { layoutVariant } from "./schemas/blocks/shared/layout-variants";
import { colorVariant } from "./schemas/blocks/shared/color-variant";
import { buttonVariant } from "./schemas/blocks/shared/button-variant";
import sectionPadding from "./schemas/blocks/shared/section-padding";
import heroWithImage from "./schemas/blocks/hero/hero-with-image";
import sectionHeader from "./schemas/blocks/section-header";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    // blocks
    link,
    colorVariant,
    buttonVariant,
    sectionPadding,
    layoutVariant,
    heroWithImage,
    sectionHeader,
  ],
};
