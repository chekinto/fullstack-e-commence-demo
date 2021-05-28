export const List = ({ list }) => {
  return (
    <div className="list">
      {list.map(item => (
        <>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </>
      ))}
    </div>
  )
}
