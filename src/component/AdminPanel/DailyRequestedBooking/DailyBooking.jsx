
import { ContainerS } from '../Common/CommonStyling'
import HOC from '../Common/HOC';
import DailyRequestTable from './DailyRequestTable'
import Header from '../Header'



const DailyRequestBooking = () => {
  return (
    <>
        <ContainerS>
            <Header cname={"Daily Booking Request"}/>    
            <DailyRequestTable/>
        </ContainerS>
    </>
  )
}
export default HOC(DailyRequestBooking)