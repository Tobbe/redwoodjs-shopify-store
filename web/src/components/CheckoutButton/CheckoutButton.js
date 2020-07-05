const CheckoutButton = () => {
  const onClick = () => {
    console.log('Go to checkout')
  }

  return (
    <button
      style={{
        display: 'block',
        padding: '0.6em 0.8em',
        backgroundColor: 'blue',
        color: 'white',
        border: '1px solid darkblue',
        borderRadius: '4px',
      }}
      onClick={onClick}
    >
      Go to Checkout
    </button>
  )
}

export default CheckoutButton
