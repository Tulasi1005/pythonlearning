import pg from "pg";

const { Client } = pg;

// Common local postgres passwords to test
const candidates = [
  "postgres",
  "admin",
  "root",
  "password",
  "123456",
  "1234",
  "12345",
  "pass",
  "postgresql",
  ""
];

async function findWorkingPassword() {
  console.log("Testing PostgreSQL connection on localhost:5432...");
  for (const password of candidates) {
    const client = new Client({
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: password,
      database: "postgres"
    });

    try {
      await client.connect();
      console.log(`\n>>> SUCCESS! Connected to PostgreSQL with password: "${password}" <<<`);
      const res = await client.query("SELECT version();");
      console.log("PostgreSQL Version:", res.rows[0].version);
      await client.end();
      process.exit(0);
    } catch (err) {
      // console.log(`Failed with password: "${password}" -> ${err.message}`);
    }
  }
  console.log("\nCould not connect with standard candidates.");
  process.exit(1);
}

findWorkingPassword();
