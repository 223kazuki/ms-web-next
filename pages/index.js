import Head from "next/head";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Link from "next/link";

export default function Home() {
  return (
    <Container style={{ marginTop: "3em" }}>
      <Header as="h1">Theming Examples</Header>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/members">
            <a>Members</a>
          </Link>
        </li>
      </ul>

      <Header as="h2" dividing>
        Site
      </Header>

      <Grid columns={3} stackable>
        <Grid.Column>
          <Header as="h1">Heading 1</Header>
          <Header as="h2">Heading 2</Header>
          <Header as="h3">Heading 3</Header>
          <Header as="h4">Heading 4</Header>
          <Header as="h5">Heading 5</Header>
          <Header as="h3">Heading 3</Header>
          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
          </p>
        </Grid.Column>

        <Grid.Column>
          <Header as="h2">Example body text</Header>

          <p>
            Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
          </p>
          <p>
            <small>
              This line of text is meant to be treated as fine print.
            </small>
          </p>
          <p>
            The following snippet of text is{" "}
            <strong>rendered as bold text</strong>.
          </p>
          <p>
            The following snippet of text is{" "}
            <em>rendered as italicized text</em>.
          </p>
          <p>
            An abbreviation of the word attribute is{" "}
            <abbr title="attribute">attr</abbr>.
          </p>
        </Grid.Column>

        <Grid.Column>
          <Grid
            centered
            columns={3}
            padded
            stackable
            style={{ margin: "-1.5em", width: 400 }}
            textAlign="center"
          >
            <Grid.Column color="red" style={{ margin: "0.5em", height: 50 }}>
              Red
            </Grid.Column>
            <Grid.Column color="orange" style={{ margin: "0.5em", height: 50 }}>
              Orange
            </Grid.Column>
            <Grid.Column color="yellow" style={{ margin: "0.5em", height: 50 }}>
              Yellow
            </Grid.Column>
            <Grid.Column color="olive" style={{ margin: "0.5em", height: 50 }}>
              Olive
            </Grid.Column>
            <Grid.Column color="green" style={{ margin: "0.5em", height: 50 }}>
              Green
            </Grid.Column>
            <Grid.Column color="teal" style={{ margin: "0.5em", height: 50 }}>
              Teal
            </Grid.Column>
            <Grid.Column color="blue" style={{ margin: "0.5em", height: 50 }}>
              Blue
            </Grid.Column>
            <Grid.Column color="violet" style={{ margin: "0.5em", height: 50 }}>
              Violet
            </Grid.Column>
            <Grid.Column color="purple" style={{ margin: "0.5em", height: 50 }}>
              Purple
            </Grid.Column>
            <Grid.Column color="pink" style={{ margin: "0.5em", height: 50 }}>
              Pink
            </Grid.Column>
            <Grid.Column color="brown" style={{ margin: "0.5em", height: 50 }}>
              Brown
            </Grid.Column>
            <Grid.Column color="grey" style={{ margin: "0.5em", height: 50 }}>
              Grey
            </Grid.Column>
            <Grid.Column color="black" style={{ margin: "0.5em", height: 50 }}>
              Black
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>

      <Header as="h2" dividing>
        Menu
      </Header>

      <Grid columns={3} doubling>
        <Grid.Column>
          <Menu
            items={[
              { key: "1", name: "link-1", content: "Link" },
              { key: "2", name: "link-2", content: "Link" },
              { key: "3", name: "link-3", content: "Link" },
            ]}
            pointing
            secondary
          />
        </Grid.Column>

        <Grid.Column>
          <Menu
            items={[
              { key: "1", name: "link-1", content: "Link" },
              { key: "2", name: "link-2", content: "Link" },
              { key: "3", name: "link-3", content: "Link" },
            ]}
            pointing
            tabular
          />
        </Grid.Column>

        <Grid.Column>
          <Menu
            items={[
              { key: "l1", name: "link-1", content: "Link" },
              { key: "l2", name: "link-2", content: "Link" },
              {
                key: "t1",
                name: "text-1",
                content: "Right text",
                position: "right",
              },
            ]}
            pointing
          />
        </Grid.Column>
      </Grid>

      <Header as="h2" dividing>
        Buttons
      </Header>

      <Grid columns="equal">
        <Grid.Column>
          <Button>Default</Button>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button basic>Basic</Button>
          <Button compact>Compact</Button>

          <Divider />

          <Button icon="heart" />
          <Button content="Labeled" icon="heart" labelPosition="left" />
          <Button content="Labeled" icon="heart" labelPosition="right" />

          <Divider />

          <Button.Group>
            <Button>Combo</Button>
          </Button.Group>

          <Divider />

          <Button animated>
            <Button.Content visible>Horizontal</Button.Content>
            <Button.Content hidden>Hidden</Button.Content>
          </Button>
          <Button animated="vertical">
            <Button.Content visible>Vertical</Button.Content>
            <Button.Content hidden>Hidden</Button.Content>
          </Button>
          <Button animated="fade">
            <Button.Content visible>Fade In</Button.Content>
            <Button.Content hidden>Hidden</Button.Content>
          </Button>

          <Divider />

          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>

          <Divider />

          <Button.Group>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </Button.Group>

          <Button.Group>
            <Button icon="align left" />
            <Button icon="align center" />
            <Button icon="align right" />
            <Button icon="align justify" />
          </Button.Group>

          <Button.Group>
            <Button>1</Button>
            <Button.Or />
            <Button>2</Button>
          </Button.Group>

          <Divider />

          <Button.Group attached="top" widths={2}>
            <Button>One</Button>
            <Button>Two</Button>
          </Button.Group>
          <Segment attached>
            <Image src="/images/wireframe/paragraph.png" />
          </Segment>
          <Button.Group attached="bottom" widths={2}>
            <Button>One</Button>
            <Button>Two</Button>
          </Button.Group>
        </Grid.Column>

        <Grid.Column>
          <Button size="mini">Mini</Button>
          <Button size="tiny">Tiny</Button>
          <Button size="small">Small</Button>
          <Button size="large">Large</Button>
          <Button size="big">Big</Button>
          <Button size="huge">Huge</Button>
          <Button size="massive">Massive</Button>

          <Divider />

          <Button color="yellow" style={{ marginBottom: "1em" }}>
            Yellow
          </Button>
          <Button color="orange" style={{ marginBottom: "1em" }}>
            Orange
          </Button>
          <Button color="green" style={{ marginBottom: "1em" }}>
            Green
          </Button>
          <Button color="teal" style={{ marginBottom: "1em" }}>
            Teal
          </Button>
          <Button color="blue" style={{ marginBottom: "1em" }}>
            Blue
          </Button>
          <Button color="purple" style={{ marginBottom: "1em" }}>
            Purple
          </Button>
          <Button color="pink" style={{ marginBottom: "1em" }}>
            Pink
          </Button>
          <Button color="red" style={{ marginBottom: "1em" }}>
            Red
          </Button>
          <Button color="black" style={{ marginBottom: "1em" }}>
            Black
          </Button>

          <Divider />

          <Segment inverted>
            <Button inverted>Inverted</Button>
            <Button basic inverted>
              Basic
            </Button>
            <Button color="blue" inverted>
              Colored
            </Button>
            <Button basic color="blue" inverted>
              Basic Colored
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>

    // <Container className="mainContainer">
    //   <Menu className="mainMenu" fixed="top" secondary size="large">
    //     <Menu.Item as="a" href="#" active={true}>
    //       <Icon name="adjust">Test</Icon>
    //     </Menu.Item>
    //   </Menu>
    // </Container>

    // <div className="container">
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main>
    //     <h1 className="title">
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className="description">
    //       Get started by editing <code>pages/index.js</code>
    //     </p>

    //     <div className="grid">
    //       <a href="https://nextjs.org/docs" className="card">
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className="card">
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className="card"
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className="card"
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
    //     </a>
    //   </footer>

    //   <style jsx>{`
    //     .container {
    //       min-height: 100vh;
    //       padding: 0 0.5rem;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     main {
    //       padding: 5rem 0;
    //       flex: 1;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     footer {
    //       width: 100%;
    //       height: 100px;
    //       border-top: 1px solid #eaeaea;
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     footer img {
    //       margin-left: 0.5rem;
    //     }

    //     footer a {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     a {
    //       color: inherit;
    //       text-decoration: none;
    //     }

    //     .title a {
    //       color: #0070f3;
    //       text-decoration: none;
    //     }

    //     .title a:hover,
    //     .title a:focus,
    //     .title a:active {
    //       text-decoration: underline;
    //     }

    //     .title {
    //       margin: 0;
    //       line-height: 1.15;
    //       font-size: 4rem;
    //     }

    //     .title,
    //     .description {
    //       text-align: center;
    //     }

    //     .description {
    //       line-height: 1.5;
    //       font-size: 1.5rem;
    //     }

    //     code {
    //       background: #fafafa;
    //       border-radius: 5px;
    //       padding: 0.75rem;
    //       font-size: 1.1rem;
    //       font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
    //         DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    //     }

    //     .grid {
    //       display: flex;
    //       align-items: center;
    //       justify-content: center;
    //       flex-wrap: wrap;

    //       max-width: 800px;
    //       margin-top: 3rem;
    //     }

    //     .card {
    //       margin: 1rem;
    //       flex-basis: 45%;
    //       padding: 1.5rem;
    //       text-align: left;
    //       color: inherit;
    //       text-decoration: none;
    //       border: 1px solid #eaeaea;
    //       border-radius: 10px;
    //       transition: color 0.15s ease, border-color 0.15s ease;
    //     }

    //     .card:hover,
    //     .card:focus,
    //     .card:active {
    //       color: #0070f3;
    //       border-color: #0070f3;
    //     }

    //     .card h3 {
    //       margin: 0 0 1rem 0;
    //       font-size: 1.5rem;
    //     }

    //     .card p {
    //       margin: 0;
    //       font-size: 1.25rem;
    //       line-height: 1.5;
    //     }

    //     .logo {
    //       height: 1em;
    //     }

    //     @media (max-width: 600px) {
    //       .grid {
    //         width: 100%;
    //         flex-direction: column;
    //       }
    //     }
    //   `}</style>

    //   <style jsx global>{`
    //     html,
    //     body {
    //       padding: 0;
    //       margin: 0;
    //       font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    //         Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    //         sans-serif;
    //     }

    //     * {
    //       box-sizing: border-box;
    //     }
    //   `}</style>
    // </div>
  );
}
