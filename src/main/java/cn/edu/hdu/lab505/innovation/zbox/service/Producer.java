package cn.edu.hdu.lab505.innovation.zbox.service;

import cn.edu.hdu.lab505.innovation.zbox.DataQueueManager;
import org.apache.log4j.Logger;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.SocketException;

/**
 * Created by hhx on 2016/11/20.
 */
public class Producer implements Runnable {
    private static final Logger LOGGER = Logger.getLogger(Producer.class);
    private static final int PORT;
    private static final int DATA_LEN;
    private DatagramSocket socket;
    private byte[] inBuff;
    private DatagramPacket inPacket;
    private DataQueueManager dataQueueManager;

    static {
        PORT = 6666;
        DATA_LEN = 4096;
    }

    public Producer() {
        this.inBuff = new byte[DATA_LEN];
        this.inPacket = new DatagramPacket(inBuff, inBuff.length);
        this.dataQueueManager = DataQueueManager.getInstance();
    }

    public void listen() {
        try {
            socket = new DatagramSocket(PORT);
            while (true) {
                socket.receive(inPacket);
                dataQueueManager.put(inBuff);
                inPacket.setLength(DATA_LEN);
            }
        } catch (SocketException e) {
            LOGGER.error(e);
        } catch (IOException e) {
            LOGGER.error(e);
        } finally {
            if (socket != null) {
                socket.close();
            }
        }

    }

    @Override
    public void run() {
        LOGGER.info("生产者线程启动");
        listen();
    }
}
