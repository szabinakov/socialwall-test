const BASE_URL = 'http://private-cc77e-aff.apiary-mock.com/posts';

const getItems = async () => {
  try {
    const response = await axios.get(BASE_URL);
    const todoItems = response.data.items;

    return todoItems
  } catch (errors) {
    console.error(errors);
  }
};

getTodoItems()