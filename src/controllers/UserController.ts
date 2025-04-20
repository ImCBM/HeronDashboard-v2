import { UserModel, User } from '../models/User'
import { UserActivity } from '../models/UserActivity'

/**
 * Handles all user management operations
 */
export class UserController {
  private static updateInterval: number | undefined
  private static users: (User & { status: string })[] = []

  /**
   * Fetches all users with their activity status
   * @returns Promise<Array<User & { status: string }>> List of users with activity status
   */
  static async fetchUsers(): Promise<(User & { status: string })[]> {
    try {
      const fetchedUsers = await UserModel.getAllUsers()
      
      this.users = fetchedUsers.map(user => ({
        ...user,
        status: UserActivity.calculateStatus(user.test_last_active)
      }))
      
      return this.users
    } catch (error) {
      console.error('Error fetching users:', error)
      return []
    }
  }

  /**
   * Starts the periodic user list update
   * @param callback Function to call with the updated users
   * @param intervalMs Update interval in milliseconds (default: 10000 = 10 seconds)
   */
  static startUserListUpdate(callback: (users: (User & { status: string })[]) => void, intervalMs: number = 10000) {
    const updateUserList = async () => {
      await this.fetchUsers()
      callback(this.users)
    }

    // Initial update
    updateUserList()

    // Set up interval
    this.updateInterval = window.setInterval(updateUserList, intervalMs)
  }

  /**
   * Stops the periodic user list update
   */
  static stopUserListUpdate() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval)
      this.updateInterval = undefined
    }
  }

  /**
   * Gets the current users list
   * @returns Array of users with their status
   */
  static getCurrentUsers(): (User & { status: string })[] {
    return this.users
  }
} 