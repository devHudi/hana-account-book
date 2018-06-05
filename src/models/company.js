const getCompanies = () => {
  return localStorage.getItem('companies');
}

const getCompany = (companyName) => {
  return JSON.parse(localStorage.getItem('companies'))[companyName];
}

const createCompany = (companyName) => {
  let companies = JSON.parse(localStorage.getItem("companies"));

  if (companies === null) {
    localStorage.setItem('companies', JSON.stringify([companyName]));
  } else {
    companies.push(companyName);
    localStorage.setItem('companies', JSON.stringify(companies));
  }
}

const pushAccount = (companyName, content, texture, orders, count, price) => {
  let newAccount = {
    date: new Date(),
    content,
    texture,
    orders,
    count,
    price
  }

  let companies = JSON.parse(localStorage.getItem('companies'));
  companies[companyName].push(newAccount);
  
  localStorage.setItem('companies', JSON.stringify(companies));
}

export default {
  getCompanies,
  createCompany,
  pushAccount
};