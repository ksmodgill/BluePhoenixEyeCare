import type { StructureResolver } from "sanity/structure";
import { sectionTypesList } from "../schemas/documents/homepage";

const singletonTypes = new Set(["siteSettings", "header", "footer", "globalUi", "homepage"]);

const singletonItems = [
  { id: "siteSettings", title: "Site Settings", schemaType: "siteSettings" },
  { id: "header", title: "Header", schemaType: "header" },
  { id: "footer", title: "Footer", schemaType: "footer" },
  { id: "globalUi", title: "Global UI", schemaType: "globalUi" }
];

const sectionTypeNames = sectionTypesList.map((item) => item.type);

function formatSectionTitle(type: string) {
  return type.replace(/Section$/, "").replace(/([A-Z])/g, " $1").trim();
}

function sectionListItems(S: Parameters<StructureResolver>[0]) {
  return sectionTypeNames.map((type) =>
    S.listItem()
      .title(formatSectionTitle(type))
      .id(`homepage-section-${type}`)
      .child(S.documentTypeList(type).title(formatSectionTitle(type)))
  );
}

function homepageMenuItem(S: Parameters<StructureResolver>[0]) {
  return S.listItem()
    .title("Homepage")
    .id("homepage")
    .child(
      S.list()
        .title("Homepage")
        .items([
          S.listItem()
            .title("Page Content")
            .id("homepage-content")
            .child(S.document().schemaType("homepage").documentId("homepage")),
          S.divider(),
          S.listItem()
            .title("Sections")
            .id("homepage-sections")
            .child(S.list().title("Sections").items(sectionListItems(S)))
        ])
    );
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blue Phoenix")
    .items([
      ...singletonItems.map(({ id, title, schemaType }) =>
        S.listItem()
          .title(title)
          .id(id)
          .child(S.document().schemaType(schemaType).documentId(id))
      ),
      homepageMenuItem(S),
      S.divider(),
      S.listItem()
        .title("Testimonials")
        .child(S.documentTypeList("testimonial").title("Testimonials")),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId();
        return id ? !singletonTypes.has(id) && !sectionTypeNames.includes(id) && id !== "testimonial" : true;
      })
    ]);
