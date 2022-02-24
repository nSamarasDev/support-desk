import React from 'react'
import {toast} from 'react-toastify'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getTicket, reset} from '../features/tickets/ticketSlice'
import {useParams} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from'../components/Spinner'

function Ticket() {
    const {ticket, isLoading, isSuccess, isError, message} = 
    useSelector((state) => state.tickets)

    const params = useParams()

    const dispatch = useDispatch()

    const {ticketId} = useParams()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        dispatch(getTicket(ticketId))
    }, [isError, message, ticketId])

    if(isLoading){
        return <Spinner /> 
    }

    if(isError) {
        return <h3>Somthing went wrong!</h3>
    }

  return (
    <div>
        Ticket
    </div>
  )
}

export default Ticket