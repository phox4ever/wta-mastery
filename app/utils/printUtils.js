import chalk from "chalk";
import figlet from "figlet";
import chunk from "chunk";

const config = {
  logoText: 'WTA - Mastery',
  author: 'Nicola Haenni',
  contact: 'n.haenni@hf-ict.ch',
  product: 'WTA - Mastery',
  version: '1.0.0',
  license: 'MIT',
  repository: 'https://github.com/streusselhirni/wta-mastery',
  description: 'This is a web application for the WTA - Mastery project. It is a web application that allows students to learn and practice the skills they need to become a successful web developer.',
  hyperlinks: [
    { name: 'Web-UI', url: 'http://localhost:3000' },
  ],
};

export function printLogo () {
  const data = figlet.textSync(config.logoText, {}).split('\r\n');

  console.log(chalk.blue.bold("===================================================================="));
  for (let i in data) {
    console.log(chalk.blue(data[i]));
  }
  console.log(chalk.blue.bold("===================================================================="));
}

export function printDescription () {
  console.log(chalk.white.bold("      AUTHOR: ") + config.author + " - " + config.contact);
  console.log(chalk.white.bold("     PRODUCT: ") + config.product);
  console.log(chalk.white.bold("     VERSION: ") + config.version);
  console.log(chalk.white.bold("     LICENCE: ") + config.license);
  console.log(chalk.white.bold("  REPOSITORY: ") + config.repository);

  const chunks = chunk(config.description, 50);
  for (let i in chunks) {
    if (i == 0) {
      console.log(chalk.white.bold(" DESCRIPTION: ") + chunks[i]);
    } else {
      console.log("              " + chunks[i]);
    }
  }

  console.log(" ");
  for (let i in config.hyperlinks) {
    const link = config.hyperlinks[i];
    const environment = link.name + " - " + chalk.underline.green(link.url);
    if (i == 0) {
      console.log(chalk.white.bold("ENVIRONMENTS: ") + environment);
    } else {
      console.log("              " + environment);
    }
  }
  console.log(chalk.blue.bold("===================================================================="));
}