import TodosListings from "../../classe-components/TodosListings"

function Game() {
  return (
    <div>Game Is Coming Soon, Stay Tuned

      <TodosListings todos={[ {
        label: 'Finish homework',
        description: 'Complete math and science assignments',
        isBookmarked: false
    },
    {
        label: 'Buy groceries',
        description: 'Milk, eggs, bread, vegetables',
        isBookmarked: true
    },
    {
        label: 'Call mom',
        description: 'Wish her happy birthday',
        isBookmarked: false
    } ]}></TodosListings>
    </div>
  )
}

export default Game