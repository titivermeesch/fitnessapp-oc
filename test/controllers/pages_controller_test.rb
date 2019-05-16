require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get add" do
    get pages_add_url
    assert_response :success
  end

end
