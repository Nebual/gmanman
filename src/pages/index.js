import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ServerCard from "../components/ServerCard";

export default () => {
	const {
		allGamesJson: { nodes: games },
		site: {
			siteMetadata: { title: siteTitle },
		},
	} = useStaticQuery(
		graphql`
			query {
				allGamesJson {
					nodes {
						name
						controlUrl
						logsUrl
						icon
					}
				}
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	);

	return (
		<Container>
			<Helmet>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"
				/>
			</Helmet>
			<Typography variant="h3" color="inherit" gutterBottom>
				{siteTitle}
			</Typography>

			<Grid container spacing={5} component="main">
				{games.map(({ name, ...gameProps }) => (
					<Grid item key={name} xs={12} sm={6} md={4}>
						<ServerCard key={name} title={name} {...gameProps} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
