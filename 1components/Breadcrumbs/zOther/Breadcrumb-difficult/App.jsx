import Breadcrumb from "@/app/ui/components/Breadcrumb/Breadcrumb";

export default async function AdminLayout({children}) {
  const breadcrumbLabels = {
    "/admin": "Админка",
    "/admin/specs": "Характеристики",
    "/admin/specs/add": "Добавить",
    "/admin/specs/[id]": "Редактировать",
    "/admin/sections": "Разделы",
    "/admin/sections/add": "Добавить",
    "/admin/sections/[id]": "Редактировать",
  };

  return (<>
    <Breadcrumb breadcrumbLabels={breadcrumbLabels}/>
    {children}
  </>);
}
