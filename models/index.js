const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false,
});

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("open", "closed"),
  },
  //   {
  //     hooks: {
  //     beforeValidate: function generateSlug(title) {
  //     return title.replace(/\s+/g, "_").replace(/\W/g, "");
  //   }
  // }
  //   }
});

function generateSlug(title) {
  return title.replace(/\s+/g, "_").replace(/\W/g, "");
}

Page.beforeValidate((instance) => {
  instance.slug = generateSlug(instance.title);
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = { db, Page, User };
