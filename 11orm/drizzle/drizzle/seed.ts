import { db } from "@/drizzle/client";
import { option, section, spec } from "@/drizzle/schema";

export const seed = async () => {
  await db.insert(section).values([
    { id: 1, name_plural: "Фитнес-клубы", name_singular: "Фитнес-клуб", object_type: "org" },
    { id: 2, name_plural: "Бассейны", name_singular: "Бессейн", object_type: "place" },
    { id: 3, name_plural: "Тренажерные залы", name_singular: "Тренажерный зал", object_type: "place" },
  ])

  await db.insert(spec).values([
    { id: 1, name_service: "Фитнес-клубы — Тип", name_public: "Тип", options_number: "many", object_type: "org" },
    { id: 2, name_service: "Бассейны — Тип", name_public: "Тип", options_number: "one", object_type: "place" },
    { id: 3, name_service: "Бассейны — Длина", name_public: "Длина", options_number: "one", object_type: "place" },
    { id: 4, name_service: "Конструкция — Места", name_public: "Конструкция", options_number: "many", object_type: "place" },
  ])

  await db.insert(option).values([
    { id: 1, name: "С бассейном",         order: 1, spec_id: 1 },
    { id: 2, name: "С тренажёрным залом", order: 2, spec_id: 1 },
    { id: 3, name: "Только для женщин",   order: 3, spec_id: 1 },
    { id: 4, name: "Другие",              order: 4, spec_id: 1 },
    { id: 5, name: "Спортивные",          order: 1, spec_id: 2 },
    { id: 6, name: "Другие плавательные", order: 2, spec_id: 2 },
    { id: 7, name: "Детские",             order: 3, spec_id: 2 },
    { id: 8, name: "Грудничковые",        order: 4, spec_id: 2 },
    { id: 9, name: "50 метров",           order: 1, spec_id: 3 },
    { id: 10, name: "25 метров",          order: 2, spec_id: 3 },
    { id: 11, name: "до 24 метров",       order: 3, spec_id: 3 },
    { id: 12, name: "Крытое",             order: 1, spec_id: 4 },
    { id: 13, name: "Открытое",           order: 2, spec_id: 4 },
  ]);
}