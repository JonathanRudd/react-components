import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "1",
      label: 'Can I use react on a project?',
      content: 'Yes, you can use react on any project you want.'
    },
    {
      id: "2",
      label: 'What is the difference between react and react native?',
      content: 'React is a library for building web interfaces, while React Native is a framework for building native mobile applications.'
    },
    {
      id: "3",
      label: 'What is the difference between a framework and a library?',
      content: 'The technical difference between a framework and library lies in a term called inversion of control. When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow.'
    }
  ];

  return <Accordion items={items} />
};

export default AccordionPage;
