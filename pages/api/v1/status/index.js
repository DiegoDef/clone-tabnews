import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString()
  const query = await database.query("select current_setting('server_version') AS postgres_version,  count(psa.*)::int as used_connections, (SELECT current_setting('max_connections')::int) AS max_connections FROM pg_stat_activity psa WHERE state = 'active';")

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        postgres_version: query.rows[0].postgres_version,
        max_connections: query.rows[0].max_connections,
        used_connections: query.rows[0].used_connections
      }
    }
   });
}

export default status;
