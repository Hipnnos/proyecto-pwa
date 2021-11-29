/*eslint-disable*/
import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex justifyContent="space-between" textAlign="center" px="220px" pb="20px">
      <Text color="gray.400" textAlign={{base: "center", xl: "start",}} mb={{ base: "20px", xl: "0px" }}>
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          {document.documentElement.dir === "rtl"
            ? " مصنوع من ❤️ بواسطة"
            : "Realizado por: DisMX "}
        </Text>
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://www.creative-tim.com"
          target="_blank"
        >
          {document.documentElement.dir === "rtl"
            ? " توقيت الإبداعية"
            : "Creative Tim "} 
        </Link>
        &
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://www.simmmple.com"
          target="_blank"
        >
          {document.documentElement.dir === "rtl" ? "سيممبل " : " Simmmple"}
        </Link>
        {document.documentElement.dir === "rtl"
          ? "للحصول على ويب أفضل"
          : " por una mejor web"}
      </Text>
    </Flex>
  );
}
