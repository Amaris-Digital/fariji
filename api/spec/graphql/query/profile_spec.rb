RSpec.describe 'Query::Fetch user profile', type: :request do
    let!(:user) { User.create(phone: '+254704333658', date_of_birth: "1990-01-01", password: "Password1")}

    describe 'get profile' do
        context 'when user exists' do
            before do
                post "/graphql", params: { query: query(id: user.id) }
            end

            it 'returns a success message' do
                json = JSON.parse(response.body)
                expect(json['data']['profile']['message']).to eq('user profile fetched successfully')
            end

            it 'returns a success status' do
                json = JSON.parse(response.body)
                expect(json['data']['profile']['status']).to eq('success')
            end
        end

        context "when user doesn't exist" do
            before do
                post "/graphql", params: { query: query(id: 0) }
            end

            it 'returns a failed status message' do
                json = JSON.parse(response.body)
                expect(json['data']['profile']['status']).to eq('failed')
            end

            it "returs a failed message" do
                json = JSON.parse(response.body)
                expect(json['data']['profile']['message']).to eq('user profile not found')
            end
        end



    end

    def query( id: )
        <<-GQL
            query {
                profile(
                    id: "#{id}"
                ) {
                    status
                    message
                    body
                }
            }
        GQL
    end
end