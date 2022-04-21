import Footer from 'components/admin/Footer';
import Overview from '../components/Overview';
import ReadMore from '../components/ReadMore/';
import ChartOverView from '../components/ChartOverView';
import RankingOverview from '../components/RakingOverview';

function Main() {
  return (
    <>
     <div className="container-fluid py-4">
        <Overview />
        <ReadMore />
        <ChartOverView /> 
        <RankingOverview />
        <Footer />
     </div>
    </>
  );
}
export default Main;