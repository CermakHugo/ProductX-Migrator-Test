

package src.db;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

public class Calculator {
    private static final String KEY = "currentCalculation";
    private static final String HOST = "localhost";
    private static final int PORT = 6379;
    private static JedisPool jedisPool;

    static {
        JedisPoolConfig poolConfig = new JedisPoolConfig();
        jedisPool = new JedisPool(poolConfig, HOST, PORT);
    }

    public static String getCurrentCalculation() {
        try (Jedis jedis = jedisPool.getResource()) {
            return jedis.get(KEY);
        } catch (Exception e) {
            // handle exception
            return null;
        }
    }

    public static void updateCurrentCalculation(String calculation) {
        if (calculation == null || calculation.isEmpty()) {
            // handle invalid input
            return;
        }
        try (Jedis jedis = jedisPool.getResource()) {
            jedis.set(KEY, calculation);
        } catch (Exception e) {
            // handle exception
        }
    }
}