import { Content, P, Template, Title } from './components';

export default function TestMail() {
  return (
    <Template>
      <Title>Test Email from LoveNotes</Title>
      <Content>
        <P>This is a test email from your LoveNotes instance.</P>
      </Content>
    </Template>
  );
}
