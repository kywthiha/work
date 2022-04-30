import Layout from "../../components/layout";
import WorkDetail from "../../components/work-detail/work-detail";

const Index = ({work}) => {
  return (
    <Layout>
      <WorkDetail work={work}/>
    </Layout>
  );
};

export default Index;

export async function getServerSideProps(context) {
  return {
    props: {
      work: {
        title: "OCBC Pay Anyone",
        body: "You can now pay kopitiam uncles, merchants, peers, and dears with the OCBC Pay Anyone app, and you can even withdraw cash by scanning the QR code at OCBC’s ATMs without your card!",
        key_features: [
          {
            name: "Scan to pay",
          },
          {
            name: "Transfer cash and request payment",
          },
          {
            name: "ATM QR cash withdrawal",
          },
          {
            name: "Access exclusive discounts and promotions",
          },
        ],
        slider: {
          list: [
            "/image/item-detail1.png",
            "/image/item-detail2.png",
            "/image/item-detail3.png",
            "/image/item-detail4.png",
          ],
          background_color: "#72d2cc",
        },
        pagination: {
          prev_link: "/work/prev-ocbc-pay-anyone",
          next_link: "/work/next-ocbc-pay-anyone",
        },
        marketplaces: [
          {
            image: "/image/apple.png",
            title: "App store",
            body: "Available on",
          },
          {
            image: "/image/playstore.png",
            title: "Google play",
            body: "Available on",
          },
        ],
      },
    },
  };
}
