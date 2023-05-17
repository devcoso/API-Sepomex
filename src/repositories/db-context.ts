import mysql from "mysql";
import util from "util";

type DBContextProps = {
  sql: string;
  flag?: boolean;
};

export const DBContext = async ({ sql, flag }: DBContextProps) => {
  const conn = mysql.createConnection({
    host: process.env.DBSERVER,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: flag ? process.env.DBTICKETS : process.env.DBNAME,
  });

  const query = util.promisify(conn.query).bind(conn);

  try {
    const result: any = await query(sql);
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
};
