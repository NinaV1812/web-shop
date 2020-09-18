const { user, categories, order, product } = require("./models");

async function listsWithUsers() {
  const lists = await order.findAll({
    include: [user],
  });

  return lists.map((list) => list.get({ plain: true }));
}

listsWithUsers().then((lists) => console.log(lists));
