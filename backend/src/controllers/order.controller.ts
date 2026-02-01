import { Response } from 'express';
import { OrderService } from '../services/order.service';
import { AuthRequest } from '../middleware/auth.middleware';

export class OrderController {
  constructor(private orderService: OrderService) {}

  createOrder = async (req: AuthRequest, res: Response) => {
    try {
      console.log('📦 Order creation request received');
      console.log('User ID:', req.user!.userId);
      console.log('Order data:', JSON.stringify(req.body, null, 2));
      
      const userId = req.user!.userId;
      const orderData = req.body;

      const order = await this.orderService.createOrder(userId, orderData);

      console.log('✅ Order created successfully:', order.orderNumber);
      res.status(201).json({
        success: true,
        message: 'Order created successfully',
        data: order
      });
    } catch (error: any) {
      console.error('❌ Create order error:', error);
      console.error('Error stack:', error.stack);
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to create order'
      });
    }
  };

  getUserOrders = async (req: AuthRequest, res: Response) => {
    try {
      const userId = req.user!.userId;

      const orders = await this.orderService.getUserOrders(userId);

      res.status(200).json({
        success: true,
        data: orders
      });
    } catch (error: any) {
      console.error('Get user orders error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch orders'
      });
    }
  };

  getOrderById = async (req: AuthRequest, res: Response) => {
    try {
      const userId = req.user!.userId;
      const orderId = req.params.orderId as string;

      const order = await this.orderService.getOrderById(orderId, userId);

      if (!order) {
        res.status(404).json({
          success: false,
          message: 'Order not found'
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: order
      });
    } catch (error: any) {
      console.error('Get order error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch order'
      });
    }
  };

  updateOrderStatus = async (req: AuthRequest, res: Response) => {
    try {
      const orderId = req.params.orderId as string;
      const { status } = req.body;

      const order = await this.orderService.updateOrderStatus(orderId, status);

      if (!order) {
        res.status(404).json({
          success: false,
          message: 'Order not found'
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: 'Order status updated successfully',
        data: order
      });
    } catch (error: any) {
      console.error('Update order status error:', error);
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to update order status'
      });
    }
  };

  cancelOrder = async (req: AuthRequest, res: Response) => {
    try {
      const userId = req.user!.userId;
      const orderId = req.params.orderId as string;

      console.log('🚫 User cancelling order:', orderId);

      // Get the order first to check ownership and status
      const order = await this.orderService.getOrderById(orderId, userId);

      if (!order) {
        res.status(404).json({
          success: false,
          message: 'Order not found'
        });
        return;
      }

      // Check if order can be cancelled
      if (order.status === 'shipped' || order.status === 'delivered') {
        res.status(400).json({
          success: false,
          message: 'Cannot cancel order that has been shipped or delivered'
        });
        return;
      }

      if (order.status === 'cancelled') {
        res.status(400).json({
          success: false,
          message: 'Order is already cancelled'
        });
        return;
      }

      // Cancel the order
      const cancelledOrder = await this.orderService.updateOrderStatus(orderId, 'cancelled');

      console.log('✅ Order cancelled:', orderId);

      res.status(200).json({
        success: true,
        message: 'Order cancelled successfully',
        data: cancelledOrder
      });
    } catch (error: any) {
      console.error('❌ Cancel order error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to cancel order'
      });
    }
  };
}
