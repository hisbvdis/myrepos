export default function App(props) {
  return (
    <ComboBox value={searchParams.city} onChange={(value) => router.push(manageSearchParams("set", "city", value))} placeholder="Введите название" options={
      dbCities?.map(({id, name, country}) => ({id, label: `${name} (${country.name_ru})`}))
    }/>
  )
}
