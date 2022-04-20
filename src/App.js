import React, { useEffect } from 'react'
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Login from './component/AdminPanel/LogIn/AdminLogin'
import AdminMainDashBord from './component/AdminPanel/AdminDashboard/AdminDashboard'
import DailyRequestBooking from './component/AdminPanel/DailyRequestedBooking/DailyBooking'
import VendorHome from './component/AdminPanel/VendorList/VendorHome'
import SingleVendorDetails from './component/AdminPanel/VendorList/SingleVendorDetails';
import EditVendor from './component/AdminPanel/VendorList/EditVendor';
import AdminProfileUpdate from './component/AdminPanel/Profile/AdminProfile'
import AdminDeliveryHome from './component/AdminPanel/DeliveryPartner/DeliveryPartner'
import CreateDisCount from './component/AdminPanel/CreateDiscount/CreateDisCount';
import Banner from './component/AdminPanel/Banner/Banner'
import AddBanner from './component/AdminPanel/Banner/AddBanner';
import ProductOrderStatistic from './component/AdminPanel/ProductOrderStatistic/ProductOrderStatistic';
import PushNotifications from './component/AdminPanel/PushNotification/PushNotifications';
import VendorDashboard from './component/VendorPanel/VendorDashboard/VendorDashboard';
import Vendorsignup from './component/VendorPanel/RegistrationAndLogin/VendorSignUp';
import VendorLogin from './component/VendorPanel/RegistrationAndLogin/VendorLogin';
import ProductDetails from './component/VendorPanel/ProductDetails/ProductDetails';
import AddProduct from './component/VendorPanel/ProductDetails/AddProduct';
import Review from './component/VendorPanel/ProductDetails/ProductReviewPage'
import SingleProductsDetails from './component/VendorPanel/ProductDetails/SingleProductDetails'
import VendorOrder from './component/VendorPanel/Orders/VendorOrder';
import VendorComplain from './component/VendorPanel/Complain/VendorComplain';
import CommissionList from './component/VendorPanel/Commission/CommissionList';
import UsersHome from './component/VendorPanel/Users/Users'
import SingleUserDetails from './component/VendorPanel/Users/SingleUserDetails';
import EditUser from './component/VendorPanel/Users/EditUser';
import Categories from './component/VendorPanel/Categories/Categories';
import AddCategories from './component/VendorPanel/Categories/AddCategories';
import EditCategories from './component/VendorPanel/Categories/Edit-Categories';
import SingleCategoriesDetails from './component/VendorPanel/Categories/SingleCategoriesDetails';
import Coupon from './component/VendorPanel/Coupons/Coupon'
import Timeing from './component/VendorPanel/Timing/Timing'
import Support from './component/VendorPanel/Support/Support';
import VendorProfileSettings from './component/VendorPanel/Settings/VendorProfileSettings';
import SalesReport from './component/VendorPanel/Pages/SalesReport/SalesReport';
import InStokPurchaseHome from './component/VendorPanel/Pages/InstokePurchase/InStokPurchaseHome';
import OflineOnlineHome from './component/VendorPanel/Pages/OflineOnlineSale/OflineOnlineHome';
import ReportHme from './component/VendorPanel/Pages/Customer&SupplierReport/ReportHme';
import ProductQuntityAlert from './component/VendorPanel/Pages/ProductQuentityAlert/ProductQuntityAlert';
import Returns from './component/VendorPanel/Pages/Returns/Returns';
import SalesHome from './component/Salers/SalesHome/SalesHome';
import SalesLogin from './component/Salers/Login&Register/SalesLogin';
import SalesRegister from './component/Salers/Login&Register/SalesRegister';
import UploadDocuments from './component/Salers/UploadDocuments/UploadDocuments';
import SalersDocuments from './component/Salers/SalersDocouments/SalersDocuments';
import Notification from './component/Salers/Notifications/Notification';
import History from './component/Salers/History/History';
import SalesProfile from './component/Salers/SalesProfile/SalesProfile';
import ForgotPassword from './component/Salers/ForgetPassword/ForgotPassword';
import OPTpage from './component/Salers/ForgetPassword/OTPpage';
import EnterPassword from './component/Salers/ForgetPassword/NewPassword';
import PaymentGateway from './component/VendorPanel/PaymentGateWay/PaymentGateway';
import TransactionList from './component/VendorPanel/PaymentGateWay/TransactionList';
import EditCoupon from './component/VendorPanel/Coupons/EditCoupon';
import CreateCoupon from './component/VendorPanel/Coupons/CreateCoupon';


const App = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

  return (
    <>
  
     <Routes>
       {/* <====================Admin -Panel====================> */}
         <Route path="/" element={<Login />} />
         <Route path="/admin" element={<AdminMainDashBord />} />
         <Route path="/daily-request-booking" element={<DailyRequestBooking />} />
         <Route path="/vendor" element={<VendorHome />} />
         <Route path="/delivery-partner" element={<AdminDeliveryHome />} />
         <Route path="/create-discount" element={<CreateDisCount />} />
         <Route path="/banner" element={<Banner />} />
         <Route path="/product-statistics" element={<ProductOrderStatistic />} />
         <Route path="/notification" element={<PushNotifications />} />

          {/* >------------- single page insidepages ---------> */}

          <Route path="/vendor-details" element={<SingleVendorDetails />} />
          <Route path="/edit-vendor-details" element={<EditVendor />} />
          <Route path="/admin-profile-update" element={<AdminProfileUpdate />} />
          <Route path="/add-banner" element={<AddBanner />} />

          {/* >-------------VendorPannel ------------> */}

          <Route path="/vendor/registration" element={<Vendorsignup />} />
          <Route path="/vendor/vendorLogin" element={<VendorLogin />} />
          <Route path="/vendor/vendor-home" element={<VendorDashboard />} />
          <Route path="/vendor/product-details" element={<ProductDetails />} />
          <Route path="/vendor/vendor-add-product" element={<AddProduct />} />
          <Route path="/vendor/review" element={<Review />} />
          <Route path="/vendor/product-single-details" element={<SingleProductsDetails />} />
          <Route path="/vendor/order-list" element={<VendorOrder />} />
          <Route path="/vendor/complain" element={<VendorComplain />} />
          <Route path="/vendor/commission" element={<CommissionList />} />
          <Route path="/vendor/users" element={< UsersHome />} />
          <Route path="/vendor/users-details" element={< SingleUserDetails />} />
          <Route path="/vendor/users-edit" element={< EditUser />} />
          <Route path="/vendor/category" element={< Categories />} />
          <Route path="/vendor/create-categories" element={< AddCategories />} />
          <Route path="/vendor/edit-categories" element={< EditCategories />} />
          <Route path="/vendor/category-details" element={< SingleCategoriesDetails />} />
          <Route path="/vendor/coupons" element={< Coupon />} />
          <Route path="/vendor/timing" element={< Timeing />} />
          <Route path="/vendor/support" element={< Support />} />
          <Route path="/vendor-profile-update" element={< VendorProfileSettings />} />
          <Route path="/vendor/payment-gateway" element={< PaymentGateway />} />


          {/* pages?\ */}
           <Route path="/vendor/sales-report" element={<SalesReport />} />
           <Route path="/vendor/instoke-purchase" element={<InStokPurchaseHome />} />
           <Route path="/vendor/online-ofline" element={<OflineOnlineHome />} />
           <Route path="/vendor/Details-report" element={<ReportHme />} />
           <Route path="/vendor/product-alert" element={<ProductQuntityAlert />} />
           <Route path="/vendor/return" element={<Returns />} />
           <Route path="/vendor/payment-gateway-details" element={<TransactionList />} />
           <Route path="/vendor/create-coupon" element={<CreateCoupon />} />
           <Route path="/vendor/edit-coupon" element={<EditCoupon />} />

           {/* //<-----------------sales panel -----------------> */}

           <Route path="/sales-panel" element={<Notification />} />        
           <Route path="/sales-login" element={<SalesLogin />} />        
           <Route path="/sales/register" element={<SalesRegister />} />        
           <Route path="/sales/uploadDoc" element={<UploadDocuments />} />        
           <Route path="/sales/selers-documents" element={<SalersDocuments />} />        
           <Route path="/sales/history" element={<History />} />        
           <Route path="/sales/profile" element={<SalesProfile />} />        
           <Route path="/forgot-password" element={<ForgotPassword />} />        
           <Route path="/otp" element={<OPTpage />} />        
           <Route path="/forgotpassword" element={<ForgotPassword />} />        
           <Route path="/newpassword" element={<EnterPassword />} />        
    </Routes>
    </>
  )
}

export default App