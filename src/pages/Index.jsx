import { Box, Button, Container, Flex, Grid, Heading, Image, Link, Text, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaShoppingCart, FaPlayCircle } from "react-icons/fa";
import React, { useState } from "react";

const artworks = [
  {
    id: 1,
    name: "Cosmic Dance",
    thumbnail: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBkYW5jZSUyMG9pbCUyMHBhaW50aW5nfGVufDB8fHx8MTcxNDE4OTA3MXww&ixlib=rb-4.0.3&q=80&w=1080",
    images: ["https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBkYW5jZSUyMG9pbCUyMHBhaW50aW5nJTIwY2xvc2V1cHxlbnwwfHx8fDE3MTQxODkwNzF8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBkYW5jZSUyMG9pbCUyMHBhaW50aW5nJTIwZ2FsbGVyeSUyMHZpZXd8ZW58MHx8fHwxNzE0MTg5MDcxfDA&ixlib=rb-4.0.3&q=80&w=1080"],
    description: "A vibrant exploration of the universe's creation through the lens of oil paint.",
    video: "https://www.example.com/cosmic-dance-video",
  },
  {
    id: 2,
    name: "Quantum Leap",
    thumbnail: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwbGVhcCUyMG9pbCUyMHBhaW50aW5nfGVufDB8fHx8MTcxNDE4OTA3MXww&ixlib=rb-4.0.3&q=80&w=1080",
    images: ["https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwbGVhcCUyMG9pbCUyMHBhaW50aW5nJTIwY2xvc2V1cHxlbnwwfHx8fDE3MTQxODkwNzJ8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwbGVhcCUyMG9pbCUyMHBhaW50aW5nJTIwZ2FsbGVyeSUyMHZpZXd8ZW58MHx8fHwxNzE0MTg5MDcyfDA&ixlib=rb-4.0.3&q=80&w=1080"],
    description: "An abstract representation of particles at the quantum level, blending physics with art.",
    video: "https://www.example.com/quantum-leap-video",
  },
];

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedArt, setSelectedArt] = useState(null);

  const openModal = (art) => {
    setSelectedArt(art);
    onOpen();
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl">
          Art & Science Gallery
        </Heading>
        <Text fontSize="xl">Explore the fusion of science and art through each unique piece.</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {artworks.map((art) => (
            <Box key={art.id} boxShadow="md" rounded="lg" overflow="hidden">
              <Image src={art.thumbnail} alt={art.name} />
              <Box p={5}>
                <Heading as="h3" size="lg">
                  {art.name}
                </Heading>
                <Text mt={2}>{art.description}</Text>
                <Button leftIcon={<FaShoppingCart />} colorScheme="teal" mt={3} onClick={() => openModal(art)}>
                  View Details
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </VStack>

      {selectedArt && (
        <Modal isOpen={isOpen} onClose={onClose} size="4xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedArt.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                {selectedArt.images.map((img, index) => (
                  <Image key={index} src={img} alt={`${selectedArt.name} view ${index + 1}`} />
                ))}
                <Flex justify="center" align="center" w="full">
                  <Link href={selectedArt.video} isExternal>
                    <Button leftIcon={<FaPlayCircle />} colorScheme="pink" variant="solid">
                      Watch Process Video
                    </Button>
                  </Link>
                </Flex>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Order Print</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Index;
