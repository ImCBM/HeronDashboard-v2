import { UserModel } from '../models/User'

/**
 * Handles all dashboard-related operations
 */
export class DashboardController {
  private static updateInterval: number | undefined

  /**
   * Starts the periodic user count update
   * @param callback Function to call with the updated count
   * @param intervalMs Update interval in milliseconds (default: 30000 = 30 seconds )
   */
  static startUserCountUpdate(callback: (count: string) => void, intervalMs: number = 30000) {
    const updateUserCount = async () => {
      const count = await UserModel.getTotalUsers()
      callback(count.toLocaleString())
    }

    // Initial update
    updateUserCount()

    // Set up interval
    this.updateInterval = window.setInterval(updateUserCount, intervalMs)
  }

  /**
   * Stops the periodic user count update
   */
  static stopUserCountUpdate() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval)
      this.updateInterval = undefined
    }
  }
} 