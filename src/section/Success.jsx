import IconSuccess from '../assets/images/icon-success.svg'

const Success = ({Email,ClickedButton}) => {
  return (
    <section className='text-N_color_Charcoal_Gray md:bg-N_color_Dark_S_Gray md:min-h-screen md:grid md:content-center md:justify-center'>

        {/* Success message start */}
        <div className='grid content-between px-7 md:px-10 min-h-screen md:bg-N_color_White md:min-h-0 md:max-w-sm md:rounded-3xl md:shadow-2xl'>
          
          <div className=' mt-7'>
            <img src={IconSuccess} alt="" aria-hidden width={64} height={64}/>
            <h2 className=' text-4xl font-bold my-5'>Thanks for subscribing!</h2>
            <p className='md:text-sm'>
                A confirmation email has been sent to <b>{Email}</b>.
                Please open it and click the button inside to confirm your subscription.
            </p>
          </div>
          <button onClick={ClickedButton} className=' p-3 bg-N_color_Dark_S_Gray rounded-lg my-5 hover_button text-N_color_White ml5 md:mb-10'>Dismiss message</button>
        </div>
        {/* Success message end */}

    </section>
  )
}

export default Success