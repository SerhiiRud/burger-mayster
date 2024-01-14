import { Container, Heading, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Container
      h="1200px"
      maxW="1200px"
      backgroundImage="linear-gradient(to-t, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.9)), url(../../images/png/home-background.jpg)"
      backgroundRepeat="no-repeat"
    >
      <Heading as="h1" mt="20px" mb="40px" textAlign="center" fontSize="24">
        Home page
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, autem
        harum eligendi explicabo enim impedit provident dolorem repellat fugiat
        maiores tenetur ipsam? Consectetur voluptates provident praesentium
        placeat voluptatem eum quasi, tenetur reprehenderit culpa animi, aliquid
        nemo illo molestiae explicabo cum cupiditate reiciendis repudiandae
        magnam voluptate! Ex laboriosam pariatur dignissimos assumenda hic modi
        dolorum illo aspernatur voluptate voluptas? Voluptatem neque voluptate
        quos ipsum accusamus. Minima, at? Quas vitae tenetur molestias,
        molestiae alias aperiam qui blanditiis eveniet neque nulla, possimus
        mollitia ullam doloribus, fuga fugiat libero illo? Nihil molestiae, odio
        quos inventore, saepe nulla vitae magnam deleniti, consequuntur fugiat
        repudiandae sequi blanditiis.
      </Text>
    </Container>
  );
};
