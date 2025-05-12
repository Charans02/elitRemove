import { ContactEmailForm } from "@/app/actions";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const JunkRemovalQuoteEmail = ({
  name,
  email,
  message,
  phone,
}: Omit<ContactEmailForm, "to">) => {
  return (
    <Html>
      <Head />
      <Preview>New junk removal quote request from your website</Preview>
      <Body
        style={{
          backgroundColor: "#f6f9fc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Container
          style={{
            padding: "20px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            maxWidth: "600px",
          }}
        >
          <Heading
            style={{
              color: "#333",
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
              margin: "30px 0",
            }}
          >
            Junk Removal Quote Request
          </Heading>

          <Section style={{ marginBottom: "20px" }}>
            <Text style={{ fontSize: "16px", margin: "0 0 10px 0" }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ fontSize: "16px", margin: "0 0 10px 0" }}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ fontSize: "16px", margin: "0 0 10px 0" }}>
              <strong>Phone:</strong> {phone}
            </Text>
          </Section>

          <Hr style={{ borderColor: "#e6ebf1", margin: "20px 0" }} />

          <Section>
            <Heading
              as="h3"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                margin: "15px 0",
              }}
            >
              Service Request Details:
            </Heading>
            <Text style={{ fontSize: "16px", lineHeight: "1.5" }}>
              {message}
            </Text>
          </Section>

          <Hr style={{ borderColor: "#e6ebf1", margin: "20px 0" }} />

          <Text
            style={{
              fontSize: "14px",
              color: "#666",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            This quote request was submitted from your website&apos;s junk
            removal form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default JunkRemovalQuoteEmail;
