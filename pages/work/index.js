import Layout from "../components/layout";
import Work from "../components/work-list/work";

const Index = ({ legends, workItems, categories }) => {
  return (
    <Layout>
      <Work legends={legends} workItems={workItems} categories={categories} />
    </Layout>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const workItems = [
    {
      cover: "/image/item1.jpg",
      span2: true,
      category: "food-beverage",
    },
    {
      cover: "/image/item2.jpg",
      category: "lifestyle",
    },
    {
      cover: "/image/item3.jpg",
      category: "food-beverage",
    },
    {
      cover: "/image/item4.jpg",
      category: "lifestyle",
    },
    {
      cover: "/image/item5.jpg",
      category: "food-beverage",
    },
    {
      cover: "/image/item6.jpg",
      span2: true,
      style: {
        color: "black",
      },
      category: "lifestyle",
    },
    {
      cover: "/image/item7.jpg",
      span2: true,
    },
    {
      cover: "/image/item8.jpg",
      span2: true,
      category: "media",
    },
    {
      cover: "/image/item2.jpg",
      category: "media",
    },
    {
      cover: "/image/item3.jpg",
      category: "food-beverage",
    },
    {
      cover: "/image/item4.jpg",
      category: "media",
    },
  ];

  const legends = [
    {
      image: "/image/app.svg",
      title: "APP",
    },
    {
      image: "/image/web.svg",
      title: "WEB",
    },
    {
      image: "/image/cms.svg",
      title: "CMS",
    },
    {
      image: "/image/uiux.svg",
      title: "UI/UX",
    },
  ];

  const categories = [
    {
      name: "All",
      href: "all",
    },
    {
      name: "Food & Beverage",
      href: "food-beverage",
    },
    {
      name: "Media",
      href: "media",
    },
    {
      name: "Transport & Logistics",
      href: "transport-logistics",
    },
    {
      name: "Banking & Finance",
      href: "banking-finance",
    },
    {
      name: "Lifestyle",
      href: "lifestyle",
    },
    {
      name: "Co-incubation",
      href: "co-incubation",
    },
    {
      name: "Healthcare",
      href: "healthcare",
    },
    {
      name: "Retail & Entertainment",
      href: "retail-entertainment",
    },
    {
      name: "Telco",
      href: "telco",
    },
    {
      name: "Others",
      href: "others",
    },
    {
      name: "Start-ups",
      href: "start-ups",
    },
  ];

  const { tag } = context.query;
  return {
    props: {
      legends,
      categories,
      workItems:
        !tag || tag === "all"
          ? workItems
          : workItems.filter((item) => item.category === tag),
    },
  };
}
