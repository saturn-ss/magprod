import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticate } from "../shopify.server";

import {
  Layout,
  Page,
  Card,
  Text,
  Thumbnail,
  IndexTable
} from "@shopify/polaris";

import { ImageIcon } from "@shopify/polaris-icons";

export async function loader({ request }) {
  const { admin } = await authenticate.admin(request);

  const response = await admin.graphql(
    `
      query {
        customers(first: 20) {
          edges {
            node {
              id
              firstName
              lastName
              email
              phone
              ordersCount
              totalSpent
            }
            cursor
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `
  );

  return json(response.data.customers);
}

export default function customers() {
  const customerData = useLoaderData();

  return (
    <Page>
      <Text>
        { JSON.stringify() }
      </Text>
    </Page>
  )
}