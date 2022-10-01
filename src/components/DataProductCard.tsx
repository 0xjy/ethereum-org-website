import React from "react"

import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react"

export interface DataRow {
  logo: IGatsbyImageData
  coin: string
  apy: string
}

export interface IProps {
  url: string
  background: string
  image: IGatsbyImageData
  alt?: string
  name: string
  description?: string
  data?: Array<DataRow>
}

const DataProductCard: React.FC<IProps> = ({
  url,
  background,
  image,
  alt,
  name,
  description,
  data,
}) => (
  <LinkBox
    color="text"
    background="searchBackground"
    border="1px solid"
    borderColor="lightBorder"
    borderRadius="base"
    overflow="hidden"
    boxShadow="table"
    display="flex"
    flexDirection="column"
    _hover={{
      background: "tableBackgroundHover",
      boxShadow: "tableBoxShadow",
      transition: "transform 0.1s ease 0s",
      transform: "scale(1.02)",
    }}
  >
    <Flex
      alignItems="center"
      justifyContent="center"
      boxShadow="rgb(0 0 0 / 10%) 0px -1px 0px inset;"
      minH="200px"
      bg={background}
    >
      <Image
        as={GatsbyImage}
        image={image}
        objectFit="cover"
        alt={alt ? alt : `${name} logo`}
        width="100%"
        alignSelf="center"
        maxWidth={{ base: "311px", sm: "372px" }}
        maxHeight="257px"
      />
    </Flex>
    <Flex
      textAlign="left"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Heading
          as="h3"
          size="lg"
          fontSize="1.5rem"
          fontWeight="600"
          lineHeight="1.4"
          margin="2rem 1rem"
          marginBottom="1rem"
        >
          <LinkOverlay href={url} isExternal>
            {name}
          </LinkOverlay>
        </Heading>
        <Text
          fontSize="sm"
          opacity="0.8"
          margin="0 1rem"
          marginBottom="1rem"
          lineHeight="140%"
        >
          {description}
        </Text>
      </Box>
      {data && (
        <Box
          overflowY="scroll"
          maxHeight="160px"
          marginBottom="1rem"
          borderTop="1px solid"
          borderColor="lightBorder"
        >
          {data.map(({ logo, coin, apy }, idx) => (
            <Flex
              key={idx}
              color="text300"
              fontSize="sm"
              justifyContent="space-between"
              padding="1rem"
              textTransform="uppercase"
              border="1px solid"
              borderColor="lightBorder"
              borderLeft="0"
              borderRight="0"
            >
              <Flex alignItems="center">
                {logo && (
                  <Image
                    as={GatsbyImage}
                    image={logo}
                    objectFit="cover"
                    alt=""
                    minWidth="24px"
                    marginRight="0.5rem"
                  />
                )}
                {coin}
              </Flex>
              <Flex alignItems="center">{apy}% APY</Flex>
            </Flex>
          ))}
        </Box>
      )}
    </Flex>
  </LinkBox>
)

export default DataProductCard
