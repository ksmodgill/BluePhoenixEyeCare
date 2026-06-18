import type { StructureResolver } from "sanity/structure";
import { sectionTypesList } from "../schemas/documents/homepage";

const singletonTypes = new Set(["siteSettings", "header", "footer", "globalUi", "homepage"]);

const singletonItems = [
  { id: "siteSettings", title: "Site Settings", schemaType: "siteSettings" },
  { id: "header", title: "Header", schemaType: "header" },
  { id: "footer", title: "Footer", schemaType: "footer" },
  { id: "globalUi", title: "Global UI", schemaType: "globalUi" },
  { id: "homepage", title: "Homepage", schemaType: "homepage" }
];

const sectionTypeNames = sectionTypesList.map((item) => item.type);

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
      S.divider(),
      S.listItem()
        .title("Sections")
        .child(
          S.list()
            .title("Sections")
            .items(
              sectionTypeNames.map((type) =>
                S.listItem()
                  .title(type.replace(/Section$/, "").replace(/([A-Z])/g, " $1").trim())
                  .child(S.documentTypeList(type).title(type))
              )
            )
        ),
      S.divider(),
      S.listItem()
        .title("Testimonials")
        .child(S.documentTypeList("testimonial").title("Testimonials")),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId();
        return id ? !singletonTypes.has(id) && !sectionTypeNames.includes(id) && id !== "testimonial" : true;
      })
    ]);
